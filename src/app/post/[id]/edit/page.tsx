'use client';
import { fetchPostById } from '@/apis/posts';
import Container from '@/components/Container';
import EditPostSection from '@/sections/EditSection';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function EditPost() {
  const query = useParams();
  const Id = Number(query?.id);
  useEffect(() => {
    fetchPostById(Id);
  }, [query]);
  return (
    <Container>
      <EditPostSection id={Id} />
    </Container>
  );
}
