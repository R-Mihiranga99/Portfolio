import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/About";
import Services from "./components/Services/services";
import MyWork from "./components/MyWork/MyWork";

function App() {

  return (
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Services />
        <MyWork />
        
      </div>
    
  );
}

export default App
