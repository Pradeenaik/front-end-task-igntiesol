// src/services/api.ts
const API_BASE_URL = 'https://skunkworks.ignitesol.com:8000';

export interface Book {
  id: number;
  title: string;
  authors: { name: string }[];
  formats: Record<string, string>;
  subjects?: string[];
  bookshelves?: string[];
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}

export const fetchBooks = async (
  topic?: string,
  search?: string,
  page = 1
): Promise<ApiResponse> => {
  const params = new URLSearchParams();
  
  if (topic) params.append('topic', topic);
  if (search) params.append('search', search);
  params.append('mime_type', 'image/');
  params.append('page', page.toString());

  const response = await fetch(`${API_BASE_URL}/books?${params.toString()}`);
  if (!response.ok) throw new Error('Failed to fetch books');
  return response.json();
};

export const getBookViewableUrl = (formats: Book['formats']): string | null => {
  // Check for HTML format (ignore zip files)
  const htmlFormat = Object.keys(formats).find(key => 
    key.startsWith('text/html') && !key.includes('.zip')
  );
  if (htmlFormat) return formats[htmlFormat];
  
  // Check for PDF format (ignore zip files)
  const pdfFormat = Object.keys(formats).find(key => 
    key.startsWith('application/pdf') && !key.includes('.zip')
  );
  if (pdfFormat) return formats[pdfFormat];
  
  // Check for plain text format (ignore zip files)
  const textFormat = Object.keys(formats).find(key => 
    key.startsWith('text/plain') && !key.includes('.zip')
  );
  if (textFormat) return formats[textFormat];
  
  return null;
};