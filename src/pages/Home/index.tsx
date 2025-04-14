import {
    FaBook,
    FaBrain,
    FaTheaterMasks,
    FaLandmark,
    FaLaughBeam,
    FaMapMarkedAlt,
    FaBalanceScale,
  } from 'react-icons/fa';
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import styles from './Home.module.css';
  import { CategoryCard } from '@/components/CategoryCard';
  
  const categories = [
    { name: 'Fiction', icon: <FaBook color="#5E56E7" size={20} /> },
    { name: 'Philosophy', icon: <FaBrain color="#5E56E7" size={20} /> },
    { name: 'Drama', icon: <FaTheaterMasks color="#5E56E7" size={20} /> },
    { name: 'History', icon: <FaLandmark color="#5E56E7" size={20} /> },
    { name: 'Humour', icon: <FaLaughBeam color="#5E56E7" size={20} /> },
    { name: 'Adventure', icon: <FaMapMarkedAlt color="#5E56E7" size={20} /> },
    { name: 'Politics', icon: <FaBalanceScale color="#5E56E7" size={20} /> },
  ];
  
  export const HomePage: React.FC = () => {
    const navigate = useNavigate();
  
    const handleCategoryClick = (category: string) => {
      navigate(`/books?topic=${encodeURIComponent(category)}`);
    };
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Gutenberg Project</h1>
        <p className={styles.subtitle}>
          A social cataloging website that allows you to freely search its database of books, 
          annotations, and reviews.
        </p>
  
        <div className={styles.categoriesGrid}>
          {categories.map(({ name, icon }) => (
            <CategoryCard
              key={name}
              genre={
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {icon}
                  <span>{name}</span>
                </div>
              }
              onClick={() => handleCategoryClick(name)}
            />
          ))}
        </div>
      </div>
    );
  };
  