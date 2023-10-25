import Spinner from "@components/Spinner";
import TodoList from "@components/TodoList";
import LoginScreen from "@screens/LoginScreen";
import Navbar from "@components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/**<LoginScreen /> */}
      <Spinner />
    </div>
  );
}

export default App;
