import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <NavLink to={'/dictionary'}>Dictionary</NavLink>
      <NavLink to={'/recommend'}>Rec</NavLink>
      <NavLink to={'/training'}>Train</NavLink>
    </div>
  );
}
export default Nav;
