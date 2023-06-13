import About from "./components/About";
import Home from "./components/Home";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <MySkills/>
    </div>
  );
}

export default App;
