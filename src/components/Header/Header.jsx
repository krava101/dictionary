import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserInfo from '../UserInfo/UserInfo';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <Logo />
      <Nav />
      <UserInfo />
    </header>
  );
}

export default Header;
