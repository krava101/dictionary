import { defaultAvatar } from '../../assets/imgs';
import Icon from '../Icon/Icon';
import css from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={css.info}>
      <p>Name</p>
      <img src={defaultAvatar} alt="avatar" />
      <button className={css.menuBtn} type="button">
        <Icon name="burger" />
      </button>
    </div>
  );
};

export default UserInfo;
