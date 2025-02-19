import About from "./components/About";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import CodingAchievements from "./components/CodingAchievements";
function App() {
  return (
    <div>
      <Header />
      <Profile />
      <About />
      <Timeline />
      <Projects />
      <Expertise />
      
      <CodingAchievements/>
      <Footer/>

    </div>
  );
}

export default App;
