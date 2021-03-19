import { GetStaticProps } from 'next';
import Link from 'next/link';

import styles from '../../styles/Ninjas.module.scss';
import Ninja from '../../types/ninja';

export const getStaticProps: GetStaticProps<NinjasProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: Ninja[] = await res.json();
  return {
    props: { ninjas: data },
  };
};

export interface NinjasProps {
  ninjas: Ninja[];
}

const Ninjas: React.FC<NinjasProps> = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3> {ninja.name} </h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
