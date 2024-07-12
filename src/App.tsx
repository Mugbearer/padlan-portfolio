import { useState } from "react";
import "./App.css";

function App() {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);

  const toggleVisibilitySidebar = () => {
    setIsVisibleSidebar(!isVisibleSidebar);
  };

  return (
    <>
      <nav>
        <ul
          style={{ display: isVisibleSidebar ? "flex" : "none" }}
          className="sidebar"
        >
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 96 960 960"
                width="30"
                onClick={toggleVisibilitySidebar}
              >
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#certificates">Certificates</a>
          </li>
          <li>
            <a href="#competitions">Competitions</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#">Download CV</a>
          </li>
        </ul>
        <ul className="top-bar">
          <li className="hideOnMobile">
            <a href="#projects">Projects</a>
          </li>
          <li className="hideOnMobile">
            <a href="#certificates">Certificates</a>
          </li>
          <li className="hideOnMobile">
            <a href="#competitions">Competitions</a>
          </li>
          <li className="hideOnMobile">
            <a href="#contact">Contact</a>
          </li>
          <li className="hideOnMobile">
            <a href="#">Download CV</a>
          </li>
          <li className="menu-button">
            <a href="#" onClick={toggleVisibilitySidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 96 960 960"
                width="30"
              >
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
