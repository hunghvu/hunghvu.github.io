import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBarComponent from './components/NavBar';
import AboutComponent from './components/About'
import ExperienceComponent from './components/Experience';

function App() {
  return (
    <>
      <NavBarComponent/>
      <AboutComponent/>
      <ExperienceComponent/>
    </>
  );
}

export default App;
