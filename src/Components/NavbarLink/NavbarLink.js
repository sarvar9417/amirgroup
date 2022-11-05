import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = ({
  path,
  handleLink,
  currentPage,
  activeIcon,
  icon,
  label,
}) => {
  return (
    <NavLink
      onClick={handleLink}
      to={path}
      className={({ isActive }) => (isActive ? "active-navlink" : "navlink")}>
      <span className='pointer-events-none '>
        {path === currentPage ? activeIcon : icon}
      </span>
      <span className='pointer-events-none ml-4'>{label}</span>
    </NavLink>
  );
};

export default NavbarLink;
