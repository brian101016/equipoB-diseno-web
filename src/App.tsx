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
} from "react-router-dom";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          element: (
            <>
              <h1>TITULO DE LA APLICACION</h1>
              <Outlet />
              <hr />
              <footer>Footer</footer>
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
          element: <NotFoundScreen />,
        },
      ])}
    />
  );
}

export default App;
