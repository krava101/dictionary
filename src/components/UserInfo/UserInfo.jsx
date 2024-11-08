import { defaultAvatar } from '../../assets/imgs';
import Icon from '../Icon/Icon';
import css from './UserInfo.module.css';

const UserInfo = ({ openMenu }) => {
  const handleOpenSidebar = () => {
    openMenu(true);
  };
  return (
    <div className={css.info}>
      <p>Name</p>
      <img src={defaultAvatar} alt="avatar" />
      <button className={css.menuBtn} type="button" onClick={handleOpenSidebar}>
        <Icon name="burger" />
      </button>
    </div>
  );
};

export default UserInfo;
