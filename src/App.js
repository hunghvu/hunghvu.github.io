import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AboutComponent from './components/About'
import ExperienceComponent from './components/Experience';
import SkillsComponent from './components/Skills';
import ProjectsComponent from './components/Projects';

function App() {
  return (
    <>
      <AboutComponent backgroundColor="#fff3e0"/> {/* Primary color */}
      <ExperienceComponent backgroundColor="#f9fbe7"/>
      <SkillsComponent backgroundColor1="#ffffff" backgroundColor2="#fff3e0"/>
      <ProjectsComponent backgroundColor="#fff3e0"/>
    </>
  );
}

export default App;
