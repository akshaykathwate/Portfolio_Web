import About from "./components/About";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Projects from "./components/Projects";
function App() {
  return (
    <div className=" md:dark:bg-slate-800 pt-2 display:flex ">
      <div>
        <Header />
      </div>
      <Profile />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
