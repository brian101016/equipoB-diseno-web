import ClassScreen from "@screens/CourseScreen";
import ForgotPassScreen from "@screens/ForgotPassScreen";
import HomeScreen from "@screens/HomeScreen";
import HomeworkScreen from "@screens/HomeworkScreen";
import LandingScreen from "@screens/LandingScreen";
import LoginScreen from "@screens/LoginScreen";
import NotFoundScreen from "@screens/NotFoundScreen";
import SignupScreen from "@screens/SignupScreen";
import StudentScreen from "@screens/StudentScreen";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          element: (
            <>
              <Outlet />
              <ButtonClass
                title="Diseño Web"
                description="Diseño web es una disciplina que se enfoca en la creación y diseño de sitios web, abarcando aspectos como la estructura, la apariencia visual, la usabilidad y la interacción."
                homework="Avance EC1"
                teacherName="JESUS ALBERTO OJEDA SAUCEDO"
              />

              <ProgressChart percentage="70"></ProgressChart>
            </>
          ),
          errorElement: <NotFoundScreen />,
          children: [
            {
              // ##################### CHILDREN ERROR */
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
                      path: "student/",
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
