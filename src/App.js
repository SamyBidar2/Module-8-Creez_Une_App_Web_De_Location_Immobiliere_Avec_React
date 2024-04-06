import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Home } from './routes/components/Home';
import { A_Propos } from './routes/components/A_Propos';
import { Fiche_Logement } from './routes/components/Fiche_Logement';
import { Erreur404 } from './routes/components/Erreur404';
import { Navbar } from './routes/components/Navbar';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Navbar />
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='A_Propos' element={<A_Propos />} />
        <Route path ='Fiche_Logement' element={<Fiche_Logement />} />
        <Route path ='Erreur404' element={<Erreur404 />} />
      </Routes>
    </>
    
  );
}
//import { Form } from 'react-router-dom';

export default App;
