'use client';
import { fetchPostById } from '@/apis/posts';
import Container from '@/components/Container';
import PostSection from '@/sections/postSection';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
export default function post() {
  const query = useParams();
  const Id = Number(query?.id);
  useEffect(() => {
    fetchPostById(Id);
  }, [query]);

  return (
    <div>
      <Container>
        <PostSection />
      </Container>
    </div>
  );
}
