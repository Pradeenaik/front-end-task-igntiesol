// src/components/BookCard/index.tsx
import React from 'react';
import styles from './BookCard.module.css';
import { Book, getBookViewableUrl } from '../../services/api';

interface BookCardProps {
  book: Book;
  onClick: (url: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  const handleClick = () => {
    const viewableUrl = getBookViewableUrl(book.formats);
    if (viewableUrl) {
      onClick(viewableUrl);
    } else {
      alert('No viewable version available');
    }
  };

  return (
    <div className={styles.bookCardWrapper} onClick={handleClick}>
      <div className={styles.bookCard}>
        <div className={styles.cover}>
          {book.formats['image/jpeg'] ? (
            <img src={book.formats['image/jpeg']} alt={`Cover of ${book.title}`} />
          ) : (
            <div className={styles.coverPlaceholder} />
          )}
        </div>
      </div>
      <h3 className={styles.title}>{book.title}</h3>
      <p className={styles.author}>{book.authors[0]?.name || 'Unknown Author'}</p>
    </div>
  );
};
