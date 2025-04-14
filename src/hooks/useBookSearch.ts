// src/hooks/useBookSearch.ts
import { useState, useEffect } from 'react';
import { fetchBooks, Book, ApiResponse } from '../services/api';

export const useBookSearch = (topic: string, searchQuery: string) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setBooks([]);
    setPage(1);
  }, [topic, searchQuery]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const controller = new AbortController();
    
    fetchBooks(topic, searchQuery, page)
      .then((data: ApiResponse) => {
        setBooks(prevBooks => [...prevBooks, ...data.results]);
        setHasMore(data.next !== null);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [topic, searchQuery, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return { books, loading, error, hasMore, loadMore };
};