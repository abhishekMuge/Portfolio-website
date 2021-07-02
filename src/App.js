import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";
import Showcases from "./Components/Showcases";
import Contact from "./Components/Conatact";
import Achievements from "./Components/Achievements";
function App() {
  return (
    <div className="Container">
      <div className="bg-black text-white">
        <Navbar />
        <Jumbotron />
      </div>
      <Achievements />
      <Showcases />
      <Contact />
    </div>
  );
}

export default App;
