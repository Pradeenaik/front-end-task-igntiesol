// src/pages/Books/index.tsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookCard } from '../../components/BookCard';
import { SearchBox } from '../../components/SearchBox';
import { useBookSearch } from '../../hooks/useBookSearch';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import styles from './Books.module.css';
import { IoMdArrowRoundBack } from 'react-icons/io';

export const BooksPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const topic = new URLSearchParams(location.search).get('topic') || '';
    const [searchQuery, setSearchQuery] = useState('');

    const { books, loading, error, hasMore, loadMore } = useBookSearch(topic, searchQuery);
    const lastBookRef = useInfiniteScroll(loading, hasMore, loadMore);

    const handleBookClick = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className={styles.container}>
            <button onClick={() => navigate('/')} className={styles.backButton}>
                <h1 className={styles.title}>
                    <span className={styles.backArrow}>
                        <IoMdArrowRoundBack />
                    </span>
                    {topic}
                </h1>
            </button>

            <div className={styles.searchContainer}>
                <SearchBox
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Search"
                />
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.booksGrid}>
                {books.map((book, index) => (
                    <div
                        key={book.id}
                        ref={index === books.length - 1 ? lastBookRef : null}
                    >
                        <BookCard book={book} onClick={handleBookClick} />
                    </div>
                ))}
            </div>

            {loading && <div className={styles.loading}>Loading more books...</div>}
        </div>
    );
};
