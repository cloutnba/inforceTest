import './Header.scss';
import {Link} from 'react-router-dom';



const Header = () => {


  return (
      <>
          <header className="header">
              <nav className="header__menu">
                  <Link to="/products" className="header__menu-item">Products</Link>
                  <Link to="/" className="header__menu-item">Link</Link>
                  <Link to="/" className="header__menu-item">Link</Link>
                  <Link to="/" className="header__menu-item">Link</Link>
              </nav>
          </header>
      </>
  );
};

export default Header;
