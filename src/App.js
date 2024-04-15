//import logo from './logo.svg';

import { Routes, Route} from 'react-router-dom';
import { Home } from './routes/components/Home';
import { APropos } from './routes/components/APropos';
import { FicheLogement } from './routes/components/FicheLogement';
import { Erreur404 } from './routes/components/Erreur404';
import { Header } from './routes/components/Header';
import { Footer } from './routes/components/Footer/Footer';

function App() {
  return (
   
    <>
      <Header />
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='A_Propos' element={<APropos />} />
        <Route path ='Fiche_Logement/:id' element={<FicheLogement />} /> 
        {/* Passe le paramèrte Id dans l'url */}
        <Route path ="*" element={<Erreur404 />} />
      </Routes>
      <Footer />
    </>
    
  );
}
//import { Form } from 'react-router-dom';

export default App;
