// src/app/search/page.tsx

"use client"

import React from 'react';
import { useSearchParams } from 'next/navigation';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';

  return (
    <div>
      <h1>Search Results</h1>
      <p>검색어: {query}</p>
      <p>이 페이지는 [{query}]에 대한 검색 결과입니다.</p>
    </div>
  );
};

export default SearchPage;
