import { Navbar } from "./Components/Navbar/Navbar";
import { Login } from "./Pages/Login";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Login />
      </div>
    </>
  );
}

export default App;
