import React, { useEffect, useState } from "react";
import { navLinks } from "./constants";
import { useLocation } from "react-router-dom";
import { map, uniqueId } from "lodash";
import NavbarLink from "../NavbarLink/NavbarLink";

const Sidebar = () => {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState("/");
  const handleLink = (path) => {
    setCurrentPage(path);
  };

  useEffect(() => {
    const pathName = location.pathname.split("/")[1];
    setCurrentPage(pathName);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="mt-[3.75rem] w-full">
        {map(navLinks, ({ icon, activeIcon, path, label }) => (
          <NavbarLink
            path={path}
            key={uniqueId("navLink")}
            currentPage={currentPage}
            handleLink={() => handleLink(path)}
            label={label}
            activeIcon={activeIcon}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
