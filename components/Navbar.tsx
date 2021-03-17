import Link from 'next/link';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>Ninja List</h1>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninjas</a>
      </Link>
    </nav>
  );
};

export default Navbar;