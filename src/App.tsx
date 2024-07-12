import { useState } from "react";
import "./App.css";
import classNames from "classnames";
import CloseMenuButton from "./components/CloseMenuButton";
import OpenMenuButton from "./components/OpenMenuButton";

function App() {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);

  const toggleVisibilitySidebar = () => {
    setIsVisibleSidebar(!isVisibleSidebar);
  };

  return (
    <>
      <nav className="shadow-md">
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
          <li className="w-full">
            <a href="#projects">Projects</a>
          </li>
          <li className="w-full">
            <a href="#certificates">Certificates</a>
          </li>
          <li className="w-full">
            <a href="#competitions">Competitions</a>
          </li>
          <li className="w-full">
            <a href="#contact">Contact</a>
          </li>
          <li className="w-full">
            <a href="#">Download CV</a>
          </li>
        </ul>
        <ul className="w-full text-xl top-bar">
          <li className="hidden md:list-item h-16">
            <a href="#projects">Projects</a>
          </li>
          <li className="hidden md:list-item h-16">
            <a href="#certificates">Certificates</a>
          </li>
          <li className="hidden md:list-item h-16">
            <a href="#competitions">Competitions</a>
          </li>
          <li className="hidden md:list-item h-16">
            <a href="#contact">Contact</a>
          </li>
          <li className="hidden md:list-item h-16">
            <a href="#">Download CV</a>
          </li>
          <li className="menu-button md:hidden">
            <OpenMenuButton onButtonClick={toggleVisibilitySidebar} />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
