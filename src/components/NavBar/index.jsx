import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/auth';

const NavBar = ({ pages }) => {
  const { user, logout } = useAuth();
  // TODO: change it into the correct layout
  const linkStyle = 'px-2 rounded';
  return (
    <nav className="flex items-center justify-center gap-4 border bg-slate-400 py-2">
      {pages.map((page) => (
        <NavLink
          key={page.label}
          to={page.path}
          className={({ isActive }) =>
            isActive ? 'bg-slate-200 ' + linkStyle : linkStyle
          }
        >
          {page.label}
        </NavLink>
      ))}
      {!!user && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

NavBar.propTypes = {
  pages: PropTypes.array,
};

export default NavBar;
