// // src/components/SearchFilters/index.tsx
// import React from 'react';
// import { BookQueryParams } from '../../services/api';
// import styles from './SearchFilters.module.css'; // Import the styles

// interface SearchFiltersProps {
//   params: BookQueryParams;
//   onChange: (params: BookQueryParams) => void;
//   availableLanguages: string[];
// }

// export const SearchFilters: React.FC<SearchFiltersProps> = ({
//   params,
//   onChange,
//   availableLanguages
// }) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     onChange({ ...params, [name]: value, page: 1 });
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = e.target;
//     onChange({ ...params, [name]: checked, page: 1 });
//   };

//   return (
//     <div className={styles.searchFilters}> {/* Applied style */}
//       <div className={styles.filterGroup}> {/* Applied style */}
//         <label className={styles.filterLabel}>Search Text:</label> {/* Added label style */}
//         <input
//           type="text"
//           name="search"
//           value={params.search || ''}
//           onChange={handleChange}
//           placeholder="Title or author"
//           className={styles.filterInput}
//         />
//       </div>

//       <div className={styles.filterGroup}>
//         <label className={styles.filterLabel}>Topic:</label>
//         <input
//           type="text"
//           name="topic"
//           value={params.topic || ''}
//           onChange={handleChange}
//           placeholder="Bookshelf or subject"
//           className={styles.filterInput}
//         />
//       </div>

//       <div className={styles.filterGroup}>
//         <label className={styles.filterLabel}>Languages:</label>
//         <select
//           name="languages"
//           value={params.languages || ''}
//           onChange={handleChange}
//           multiple={false}
//           className={styles.filterSelect} 
//         >
//           <option value="">All Languages</option>
//           {availableLanguages.map(lang => (
//             <option key={lang} value={lang}>{lang.toUpperCase()}</option>
//           ))}
//         </select>
//       </div>

//       <div className={styles.filterGroup}>
//         <label className={styles.filterLabel}>Author Years:</label>
//         <div className={styles.yearRange}>
//           <input
//             type="number"
//             name="author_year_start"
//             value={params.author_year_start || ''}
//             onChange={handleChange}
//             placeholder="Start year"
//             className={styles.filterInput}
//           />
//           <span className={styles.yearRangeSeparator}>to</span>
//           <input
//             type="number"
//             name="author_year_end"
//             value={params.author_year_end || ''}
//             onChange={handleChange}
//             placeholder="End year"
//             className={styles.filterInput}
//           />
//         </div>
//       </div>

//       <div className={styles.filterGroup}>
//         <label className={styles.filterLabel}>Sort By:</label>
//         <select
//           name="sort"
//           value={params.sort || 'popular'}
//           onChange={handleChange}
//           className={styles.filterSelect}
//         >
//           <option value="popular">Popularity</option>
//           <option value="ascending">Oldest First</option>
//           <option value="descending">Newest First</option>
//         </select>
//       </div>
//     </div>
//   );
// };