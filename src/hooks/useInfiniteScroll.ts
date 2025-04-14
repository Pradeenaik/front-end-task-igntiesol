// src/hooks/useInfiniteScroll.ts
import { useCallback, useRef, useEffect } from 'react';

export const useInfiniteScroll = (
  isLoading: boolean,
  hasMore: boolean,
  loadMore: () => void
) => {
  const observer = useRef<IntersectionObserver>();
  
  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, loadMore]
  );

  return lastElementRef;
};