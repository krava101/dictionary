import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';

function Logo() {
  return (
    <NavLink to={'/dictionary'}>
      <Icon name={'logo'} />
      VocabBuilder
    </NavLink>
  );
}

export default Logo;
