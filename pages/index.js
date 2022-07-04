
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DefPage() {
  const router = useRouter();
  useEffect(() => {
    // Update the document title using the browser API
    router.push('/home');
  });

  return 0;
}
