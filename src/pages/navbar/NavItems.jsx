import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  const items = [
    { name: "Job Search", to: "/jobs" },
    { name: "Rent", to: "/rent" },
    { name: "Buying and Selling", to: "/buyandsell" },
    { name: "Community", to: "/community" },
  ];
  return (
    <>
      {items.map((item, i) => (
        <Link key={i} className="navbar-bottom-link" to={item.to}>
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default NavItems;
