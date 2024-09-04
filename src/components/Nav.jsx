import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/login'}>Log</NavLink>
      <NavLink to={'/register'}>Reg</NavLink>
      <NavLink to={'/dictionary'}>Dictionary</NavLink>
      <NavLink to={'/recommend'}>Rec</NavLink>
      <NavLink to={'/training'}>Train</NavLink>
    </div>
  );
}

export default Nav;
