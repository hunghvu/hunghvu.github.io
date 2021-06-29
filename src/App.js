import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBarComponent from './components/NavBar';
import AboutComponent from './components/About'
import ExperienceComponent from './components/Experience';
import SkillsComponent from './components/Skills';

function App() {
  return (
    <>
      <NavBarComponent backgroundColor="#ffffff"/>
      <AboutComponent backgroundColor="#fff3e0"/>
      <ExperienceComponent backgroundColor="#ccc0ae"/>
      <SkillsComponent/>
    </>
  );
}

export default App;
