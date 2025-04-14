// src/components/SearchBox.tsx
import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import styles from './SearchBox.module.css';

interface SearchBoxProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange, placeholder }) => {
    return (
        <div className={styles.searchContainer}>
            <span className={styles.searchIcon}>
                <IoMdSearch />
            </span>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={styles.searchInputWithIcon}
            />
        </div>
    );
};
