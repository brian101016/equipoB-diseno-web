import ImageProvider from "@utils/ImageProvider";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

type _Base = import("utils/classes").Base;
// Navbar => Rename all instances to use
type NavbarProps = {
  IsLanding?: boolean;
} & _Base;

const _Navbar = (props: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <nav className={props.className}>
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
        <div className="logged">
          <button
            className="buttonHome"
            style={{
              backgroundImage: `url(${ImageProvider.misc.navbar_home})`,
            }}
            onClick={() => {
              navigate("home");
            }}></button>
          <button
            className="buttonClass"
            style={{
              backgroundImage: `url(${ImageProvider.misc.navbar_class})`,
              position: "relative",
            }}
            onClick={() => {
              navigate("class/:classid");
            }}>
            <div className="navbarMenu">
              <ol>
                <li>
                  <Link to={"class/:classid"}>
                    <h2>Diseño Web</h2>
                  </Link>
                  <p>Jesus Alberto Ojeda Saucedo</p>
                </li>
                <li>
                  <Link to={"class/:classid"}>
                    <h2>Diseño Web</h2>
                  </Link>
                  <p>Jesus Alberto Ojeda Saucedo</p>
                </li>
                <li>
                  <Link to={"class/:classid"}>
                    <h2>Diseño Web</h2>
                  </Link>
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
            onClick={() => {
              navigate("/");
            }}></button>
        </div>

        <div className="landing">
          <button
            className="button-landing-iniciar"
            onClick={() => {
              navigate("/login");
            }}>
            Iniciar Sesión
          </button>
          <button
            className="button-landing-registrar"
            onClick={() => {
              navigate("/login/signup");
            }}>
            Regístrate
          </button>
        </div>
      </div>
    </nav>
  );
};

const Navbar = styled(_Navbar)<NavbarProps>`
  ${(props) => css`
    top: 0%;
    z-index: 2;
    position: sticky;
    padding: 0.4rem;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #127ec2;
    img {
      width: 3rem;
      height: 3rem;
    }
    button {
      border-radius: 50%;
      background-size: contain;
      background-repeat: no-repeat;
      border-style: none;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      width: 40px;
      height: 37px;
    }

    .navbarContainerRight {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .navbarMenu {
      opacity: 0;
      display: none;
      transition: opacity 0.5s;
      background-color: #ffffff;
      border: 1px solid #127ec2;
      border-radius: 10px;
      position: absolute;
      width: 500%;
      top: 80%;
      margin-top: 1rem;
      right: 20%;
      ol {
        list-style-type: none;
      }
      h2 {
        margin: 0.5rem;
        font-size: 1.5rem;
        margin-top: 1rem;
        text-align: left;
        margin: 0.3rem;
      }
      p {
        margin-top: 0.5rem;
        margin-left: 0.8rem;
        margin-right: 0.8rem;
        margin-bottom: 0.5rem;
        border-bottom: 3px solid #000;
        font-family: Poppins;
        font-size: 0.725rem;
        font-style: normal;
      }
    }

    button:hover {
      cursor: pointer;
      transform: scale(0.9);
    }

    .buttonClass:hover {
      .navbarMenu {
        opacity: 1;
        display: block;
      }
    }

    .button-landing-registrar {
      border-radius: 30px;
      width: 120px;
      height: 40px;
      color: #dcf0fd;
      background: #127ec2;
    }

    .button-landing-iniciar {
      border-radius: 30px;
      border: 1px solid black;
      width: 120px;
      height: 40px;
      background: #ffffff;
      font-family: Poppins;
      font-style: normal;
    }

    ${props.IsLanding === true
      ? css`
          .logged {
            display: none;
          }
        `
      : css`
          .landing {
            display: none;
          }
        `}
  `}
`;

export default Navbar;
