import Link from 'next/link';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div className={styles.title}>
        <h1>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non est
          voluptate illum consequatur beatae facere perspiciatis id dolore animi
          laudantium quos alias cum aut, ut inventore nisi unde delectus
          asperiores.
        </p>
        <p className={styles.text}>
          Libero blanditiis perspiciatis deleniti praesentium aspernatur dolores
          atque! Eius eveniet ipsum provident, voluptatum veritatis neque illo
          laboriosam id deleniti earum vitae, dolor magni voluptatibus. Quae
          error aliquid distinctio doloribus corporis.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
