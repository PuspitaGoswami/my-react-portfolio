import About from "./components/About";
import Contact from "./components/Contact";
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
      <Contact/>
    </div>
  );
}

export default App;
