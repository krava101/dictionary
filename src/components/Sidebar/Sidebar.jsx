import clsx from 'clsx';
import { avatarWhite } from '../../assets/imgs';
import Icon from '../Icon/Icon';
import css from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isMenuOpen, closeMenu }) => {
  const sidebar = clsx(css.sidebar, isMenuOpen ? css.open : '');
  const navLink = ({ isActive }) => clsx(css.link, isActive ? css.active : '');

  const handleClose = () => {
    closeMenu(false);
  };

  return (
    <aside className={sidebar}>
      <div className={css.userWrap}>
        <div className={css.userInfo}>
          <p className={css.name}>Name</p>
          <img className={css.avatar} src={avatarWhite} alt="avatar" />
        </div>
        <button className={css.closeBtn} type="button" onClick={handleClose}>
          <Icon name="close" />
        </button>
      </div>
      <div className={css.navWrap}>
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
        <button className={css.logOutBtn} type="button">
          Log out
          <Icon name="arrow-right" stroke="#fcfcfc" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
