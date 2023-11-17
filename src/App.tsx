// ################################ IMPORTS ################################
import Navbar from "@components/NavBar";
import ClassScreen from "@screens/CourseScreen";
import ForgotPassScreen from "@screens/ForgotPassScreen";
import HomeScreen from "@screens/HomeScreen";
import HomeworkScreen from "@screens/HomeworkScreen";
import LandingScreen from "@screens/LandingScreen";
import LoginScreen from "@screens/LoginScreen";
import NotFoundScreen from "@screens/NotFoundScreen";
import SignupScreen from "@screens/SignupScreen";
import StudentScreen from "@screens/StudentScreen";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
  useNavigate,
} from "react-router-dom";
import { Course, _DB } from "@utils/classes";
import { json } from "stream/consumers";

// ################################################################ LOAD DB
/**
 * Función para usarse como `loader` de las rutas. Se encarga de agarrar toda la información de la base de datos
 * desde GitHub para poder usarla localmente dentro de `DB`.
 */
export async function loadDB() {
  const URL =
    "https://raw.githubusercontent.com/brian101016/equipoB-diseno-web/main/src/utils/database.json";
  const request = await fetch(URL);
  const response = await request.json();
  // const str = JSON.stringify(response);
  // localStorage.setItem("projectDBTest", str);
  DB = response;
  saveDB();
  return null;
}

export async function saveDB() {
  const str = JSON.stringify({users: DB.users, courses: DB.courses});
  localStorage.setItem("studySyncDB",str);
  return null;
}


// ################################################################ DB MODEL
export let DB: _DB = {
  users: [],
  courses: [],
  currentUser: null,
};

async function CheckUser() {
  if (!DB.currentUser) {
    alert("Inicia sesión para continuar");
    console.log(DB);
    return redirect("/login");
  }
  return null;
}

// ################################################################ APP
function App() {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          loader: loadDB,
          element: (
            <>
              <Navbar />
              <Outlet />
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
              loader: CheckUser,
            },
            // ########################################## CLASS, HOMEWORK & STUDENT PATH */
            {
              path: "class/:classid",
              children: [
                // ##################### CLASS */
                {
                  index: true,
                  element: <ClassScreen />,
                  loader: CheckUser,
                },
                // ##################### STUDENT */
                {
                  path: "student/:studentid?",
                  element: <StudentScreen />,
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
          loader: loadDB,
          element: (
            <>
              <Navbar />
              <NotFoundScreen />
            </>
          ),
        },
      ])}
    />
  );
}

export default App;
