import ImageProvider from "@utils/ImageProvider";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbarContainer">
      <div className="navbarContainerLeft">
        <Link to="/">
          <img
            src={ImageProvider.logo.horizontal}
            alt="logo"
            style={{ width: "137px", height: "47px" }}
          />
        </Link>
      </div>

      <div className="navbarContainerRight">
        <button
          className="buttonHome"
          style={{
            backgroundImage: `url(${ImageProvider.misc.navbar_home})`,
          }}
          onClick={() => navigate("/home")}
        ></button>

        <button
          className="buttonClass"
          style={{
            backgroundImage: `url(${ImageProvider.misc.navbar_class})`,
            position: "relative",
          }}
          onClick={() => navigate("/class/1")}
        >
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
            backgroundImage: `url(${ImageProvider.misc.navbar_user})`,
          }}
          onClick={() => navigate("/login")}
        ></button>
      </div>
    </nav>
  );
}

export default Navbar;
