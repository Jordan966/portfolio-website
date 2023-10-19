import Navbar from "../src/components/nav/navbar";
import Landing from "../src/components/landing/landing";
import About from "../src/components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;



