import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className=" mb-10 dark:text-gray-200">
      <p className="text-lg text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 ">
        {title}
      </p>
    </div>
  );
  // className="dark:text-gray-200 "
};

export default Header;
