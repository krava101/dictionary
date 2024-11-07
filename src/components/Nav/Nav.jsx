import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';
import clsx from 'clsx';

function Nav() {
  const navLink = ({ isActive }) => clsx(css.link, isActive ? css.active : '');

  return (
    <ul className={css.nav}>
      <li>
        <NavLink className={navLink} to={'/dictionary'}>
          Dictionary
        </NavLink>
      </li>
      <li>
        <NavLink className={navLink} to={'/recommend'}>
          Recommend
        </NavLink>
      </li>
      <li>
        <NavLink className={navLink} to={'/training'}>
          Training
        </NavLink>
      </li>
    </ul>
  );
}
export default Nav;
