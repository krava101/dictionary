import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
import icons from '../../assets/icons.svg';

function Logo() {
  return (
    <NavLink className={css.logo} to={'/dictionary'}>
      <svg className={css.logoIcon}>
        <use href={`${icons}#icon-logo`}></use>
      </svg>
      VocabBuilder
    </NavLink>
  );
}

export default Logo;
