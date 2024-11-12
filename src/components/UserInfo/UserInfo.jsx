import { defaultAvatar } from '../../assets/imgs';
import Icon from '../Icon/Icon';
import css from './UserInfo.module.css';

const UserInfo = ({ openMenu }) => {
  const handleOpenSidebar = () => {
    openMenu(true);
  };
  return (
    <div className={css.info}>
      <p className={css.name}>Name</p>
      <img className={css.avatar} src={defaultAvatar} alt="avatar" />
      <button className={css.menuBtn} type="button" onClick={handleOpenSidebar}>
        <Icon name="burger" />
      </button>
      <button className={css.logOutBtn} type="button">
        Log out
        <Icon name="arrow-right" stroke="#121417" />
      </button>
    </div>
  );
};

export default UserInfo;
