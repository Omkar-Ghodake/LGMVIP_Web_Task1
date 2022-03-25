import Home from "../components/Home";
import ToDoState from "../context/ToDoState";

function App() {
  return (
    <>
      <ToDoState>
        <Home />
      </ToDoState>
    </>
  );
}

export default App;
