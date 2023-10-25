import logotipo_Header from "@theme/images/logotipo_Header.png";
import Home from "@theme/images/Home.svg";
import Class from "@theme/images/Class.svg";
import User from "@theme/images/User.svg";

import { url } from "inspector";

function Navbar() {
  return (
    <>
      <nav className="navbarContainer">
        <div className="navbarContainerLeft">
          <img
            src={logotipo_Header}
            alt="logo"
            style={{ width: "137px", height: "47px" }}
          />
        </div>
        <div className="navbarContainerRight">
          <button
            className="buttonHome"
            style={{
              backgroundImage: `url(${Home})`,
            }}></button>
          <button
            className="buttonClass"
            style={{
              backgroundImage: `url(${Class})`,
              position: "relative",
            }}>
            <div className="navbarMenu">
              <ol>
                <li>
                  <h2>Diseño Web</h2>
                  <p>Jesus Alberto Ojeda Saucedo</p>
                </li>
                <li>
                  <h2>Diseño Web</h2>
                  <p>Jesus Alberto Ojeda Saucedo</p>
                </li>
                <li>
                  <h2>Diseño Web</h2>
                  <p>Jesus Alberto Ojeda Saucedo</p>
                </li>
              </ol>
            </div>
          </button>
          <button
            className="buttonUser"
            style={{
              backgroundImage: `url(${User})`,
            }}></button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
