import Logo from '../Logo/Logo';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <Logo />
    </header>
  );
}

export default Header;
