import Footer from './Footer';
import Navbar from './Navbar';

export interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='content'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
