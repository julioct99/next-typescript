import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className='not-found'>
      <h1>Oops...</h1>
      <h2>That page can't be found</h2>
      <p>
        Go back to the{' '}
        <Link href='/'>
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
