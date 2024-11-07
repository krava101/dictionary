import { useState } from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import UserInfo from '../UserInfo/UserInfo';
import css from './Header.module.css';

function Header() {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <Logo />
      <Nav />
      <UserInfo openMenu={setIsmenuOpen} />
      <Sidebar isMenuOpen={isMenuOpen} closeMenu={setIsmenuOpen} />
    </header>
  );
}

export default Header;
