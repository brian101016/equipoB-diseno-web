import Navbar from "@components/NavBar";
import Spinner from "@components/Spinner";
import TodoList from "@components/TodoList";
import LoginScreen from "@screens/LoginScreen";

function App() {
  return (
    <div className="App">
      {/* <TodoList title="asasd" number={12313} color={"green"} /> */}

      {/**<LoginScreen /> */}
      <Spinner/>
    </div>
  );
}

export default App;
