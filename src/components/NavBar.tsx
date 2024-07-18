import { useState } from "react";
import classNames from "classnames";
import CloseMenuButton from "./CloseMenuButton";
import OpenMenuButton from "./OpenMenuButton";

const NavBar = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);

  const toggleVisibilitySidebar = () => {
    setIsVisibleSidebar(!isVisibleSidebar);
  };

  return (
    <>
      <nav className="shadow-mdz">
        <ul
          // style={{ display: isVisibleSidebar ? "flex" : "none" }}
          className={classNames(
            { hidden: !isVisibleSidebar },
            "fixed",
            "top-0",
            "right-0",
            "w-full",
            "sm:w-64",
            "sidebar"
          )}
        >
          <li className="w-full">
            <CloseMenuButton onButtonClick={toggleVisibilitySidebar} />
          </li>
          <li className="w-full h-16">
            <a className="h-full" href="#projects">
              Projects
            </a>
          </li>
          <li className="w-full h-16">
            <a className="h-full" href="#certificates">
              Certificates
            </a>
          </li>
          <li className="w-full h-16">
            <a className="h-full" href="#competitions">
              Competitions
            </a>
          </li>
          <li className="w-full h-16">
            <a className="h-full" href="#contact">
              Contact
            </a>
          </li>
          <li className="w-full h-16">
            <a className="h-full" href="#">
              Download CV
            </a>
          </li>
        </ul>

        <ul className="w-full text-xl top-bar">
          <li className="hidden md:list-item h-16 hover:bg-gray-400">
            <a className="h-full" href="#projects">
              Projects
            </a>
          </li>
          <li className="hidden md:list-item h-16">
            <a className="h-full" href="#certificates">
              Certificates
            </a>
          </li>
          <li className="hidden md:list-item h-16">
            <a className="h-full" href="#competitions">
              Competitions
            </a>
          </li>
          <li className="hidden md:list-item h-16">
            <a className="h-full" href="#contact">
              Contact
            </a>
          </li>
          <li className="hidden md:list-item h-16">
            <a className="h-full" href="#">
              Download CV
            </a>
          </li>
          <li className="md:hidden h-16 menu-button">
            <OpenMenuButton onButtonClick={toggleVisibilitySidebar} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
