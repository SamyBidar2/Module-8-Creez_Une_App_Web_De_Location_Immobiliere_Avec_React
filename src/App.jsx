import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Home } from './pages/Home';
import { APropos } from './pages/APropos';
import { FicheLogement } from './pages/FicheLogement';
import { Erreur404 } from './pages/Erreur404';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
   
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='A_Propos' element={<APropos />} />
        <Route path ='Fiche_Logement/:id' element={<FicheLogement />} />  
        <Route path ="*" element={<Erreur404 />} />{/* Passe le paramèrte Id dans l'url */}
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}


export default App;
