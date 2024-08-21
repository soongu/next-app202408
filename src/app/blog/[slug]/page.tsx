// src/app/blog/[slug]/page.tsx
"use client";  // 클라이언트 컴포넌트로 명시

import React from 'react';
import { useParams } from 'next/navigation';

const BlogPost = () => {
  const params = useParams();

  return (
    <div>
      <h1>Blog Post: {params?.slug}</h1>
      <p>이 페이지는 {params?.slug}에 대한 블로그 포스트입니다.</p>
    </div>
  );
};

export default BlogPost;
