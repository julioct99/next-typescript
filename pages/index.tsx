import Link from 'next/link';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Navbar />
      <h1>Hello world!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non est
        voluptate illum consequatur beatae facere perspiciatis id dolore animi
        laudantium quos alias cum aut, ut inventore nisi unde delectus
        asperiores.
      </p>
      <p>
        Libero blanditiis perspiciatis deleniti praesentium aspernatur dolores
        atque! Eius eveniet ipsum provident, voluptatum veritatis neque illo
        laboriosam id deleniti earum vitae, dolor magni voluptatibus. Quae error
        aliquid distinctio doloribus corporis.
      </p>
      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
