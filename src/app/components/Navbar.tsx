import { useState, useRef } from "react";

// Icons
import { NavLink } from "react-router";
import { MdHive, MdOutlineHive } from "react-icons/md";
import { IconContext } from "react-icons";

const menuItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Resume",
    url: "/resume",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="font-oxanium sticky top-0 z-10">
      <nav
        className={`flex h-16 flex-row items-center justify-between ${menuOpen ? "bg-black" : "bg-gradient-to-b from-black via-black to-transparent"} px-8`}
        role="navigation"
      >
        <NavLink to="/" className="font-navbar">
          Julien Augugliaro
        </NavLink>
        <ul className="hidden items-center *:h-16 *:px-3 *:italic *:hover:bg-yellow-200 *:hover:text-black *:active:bg-black *:active:text-yellow-200 sm:flex">
          {menuItems.map((item) => (
            <NavLink
              to={item.url}
              end
              key={item.name}
              className={"flex flex-row items-center"}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
        <button className="hover:cursor-pointer sm:hidden" onClick={toggleMenu}>
          <IconContext.Provider value={{ color: "fff085", size: "16px" }}>
            {menuOpen ? <MdHive /> : <MdOutlineHive />}
          </IconContext.Provider>
        </button>
      </nav>
      {/* Mobile Menu */}
      {
        <div
          className={`bg-yellow-200 text-black md:hidden ${menuOpen ? "block" : "hidden"}`}
          ref={menuRef}
        >
          <ul className="flex flex-col *:px-4 *:py-2 *:italic *:hover:bg-black *:hover:text-yellow-200 *:active:bg-yellow-200 *:active:text-black">
            {menuItems.map((item) => (
              <NavLink to={item.url} end key={item.name}>
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}
