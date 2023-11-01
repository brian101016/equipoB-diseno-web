import Spinner from "@components/Spinner";
import Navbar from "@components/NavBar";
import ClassScreen from "@screens/CourseScreen";
import ForgotPassScreen from "@screens/ForgotPassScreen";
import HomeScreen from "@screens/HomeScreen";
import HomeworkScreen from "@screens/HomeworkScreen";
import LandingScreen from "@screens/LandingScreen";
import LoginScreen from "@screens/LoginScreen";
import ButtonClass from "@components/ButtonClass";
import ProgressChart from "@components/ProgressChart";
import { title } from "process";
import ModalComments from "@components/ModalComments";
import ModalCalificar from "@components/ModalCalificar";
import "./theme/ModalCalificar.scss";
import "./theme/Modal.scss";
import "./theme/ModalComments.scss";
import Modal from "@components/Modal";
import NotFoundScreen from "@screens/NotFoundScreen";
import SignupScreen from "@screens/SignupScreen";
import StudentScreen from "@screens/StudentScreen";
import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen2(true);
  };
  const closeModal = () => {
    setIsModalOpen2(false);
  };
  //INSTRUCCIONES:
  /**
   * useState para tener un estado el cual por defecto esta en false
   * nos permitira tener desactivado el modal y la funcion setIsModalOpen
   * nos permite cambiar el estado a true para activar el modal mediante un boton.
   */
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          element: (
            <>
              <h1>TITULO DE LA APLICACION</h1>
              <Outlet />
              <hr />
              <ButtonClass
                title="Diseño Web"
                description="Diseño web es una disciplina que se enfoca en la creación y diseño de sitios web, abarcando aspectos como la estructura, la apariencia visual, la usabilidad y la interacción."
                homework="Avance EC1"
                teacherName="JESUS ALBERTO OJEDA SAUCEDO"
              />

              <ProgressChart percentage={98.9}></ProgressChart>

              <Outlet />
              <hr />
              {/* BOTON DE PRUEBA PARA MODAL*/}
              <button
                className="botonPrueba"
                onClick={() => setIsModalOpen(true)}>
                PROBAR MODAL
              </button>

              {/* MIGUEL */}
              <Modal
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
              />

              {/* MODAL ORLANDO */}
              <button onClick={openModal}>Calificar</button>
              <ModalCalificar isOpen={isModalOpen2} onClose={closeModal} />

              <button
                onClick={() => {
                  setIsCommentOpen(true);
                }}>
                Calificar
              </button>
              <ModalComments
                isOpen={isCommentOpen}
                onClose={() => {
                  setIsCommentOpen(false);
                }}></ModalComments>
            </>
          ),
          errorElement: <NotFoundScreen />,
          children: [
            // ########################################## LANDING PATH */
            {
              index: true,
              element: <LandingScreen />,
            },
            // ########################################## HOME PATH */
            {
              path: "home",
              element: <HomeScreen />,
            },
            // ########################################## CLASS, HOMEWORK & STUDENT PATH */
            {
              path: "class/:classid",
              children: [
                // ##################### CLASS */
                {
                  index: true,
                  element: <ClassScreen />,
                },
                // ##################### STUDENT */
                {
                  path: "student/:studentid?",
                  loader: ({ params }) => {
                    if (params.studentid === "3") {
                      console.log("No se puede");
                      // return redirect("/login");
                      throw new Response("No encontrado", {
                        status: 404,
                        statusText: "El estudiante no existe",
                      });
                    }

                    return null;
                  },
                  element: <StudentScreen title={"Hola"} />,
                },
                // ##################### HOMEWORK */
                {
                  path: "homework/:workid",
                  element: <HomeworkScreen />,
                },
              ],
            },
            // ########################################## LOGIN, SIGNUP & FORGOTPASS PATH */
            {
              path: "login",
              children: [
                // ##################### LOGIN */
                {
                  index: true,
                  element: <LoginScreen />,
                },
                // ##################### SIGNUP */
                {
                  path: "signup",
                  element: <SignupScreen />,
                },
                // ##################### FORGOT PASS */
                {
                  path: "forgot",
                  element: <ForgotPassScreen />,
                },
              ],
            },
          ],
        },
        // ########################################## NOT FOUND SCREEN */
        {
          path: "*",
          element: <NotFoundScreen />,
        },
      ])}
    />
  );
}

export default App;
