import Home from "./components/Home/Home";
import CallingTheApiProvider from "./Context/CallingTheApi";

function App() {
  return (
    <>
      <CallingTheApiProvider>
        <Home />
      </CallingTheApiProvider>
    </>
  );
}

export default App;
