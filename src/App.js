import About from "./components/About";
import Home from "./components/Home";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <MySkills/>
      <Projects/>
    </div>
  );
}

export default App;
