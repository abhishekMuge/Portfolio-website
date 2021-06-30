import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";
import Showcases from "./Components/Showcases";
import Contact from "./Components/Conatact";
function App() {
  return (
    <div className="Container">
      <div className="bg-black text-white">
        <Navbar />
        <Jumbotron />
      </div>
      <Showcases />
      <Contact />
    </div>
  );
}

export default App;
