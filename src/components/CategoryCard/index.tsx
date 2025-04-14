// src/components/CategoryCard/index.tsx
import React from 'react';
import styles from './CategoryCard.module.css';
import { FaArrowRight } from 'react-icons/fa';

interface CategoryCardProps {
    genre: React.ReactNode;
    onClick?: () => void;
  }
export const CategoryCard: React.FC<CategoryCardProps> = ({ genre, onClick }) => {
  return (
    <button className={styles.categoryCard} onClick={onClick}>
      <span>{genre}</span>
      <FaArrowRight size={16} color="#5E56E7" />
    </button>
  );
};