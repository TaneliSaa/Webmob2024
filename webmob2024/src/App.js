import { Appbar } from "./Komponentit/Appbar";
import {Routes, Route} from 'react-router-dom';
import { Etusivu } from "./Komponentit/Etusivu";
import { KaksiTornia } from "./Komponentit/KaksiTornia";
import { SormustenRitarit } from "./Komponentit/SormustenRitarit";
import { KuninkaanPaluu } from "./Komponentit/KuninkaanPaluu";
import { KyselyLomake } from "./Komponentit/KyselyLomake";
import taustakuva from "./Kuvia/black-and-gold-desktop-qsz2r17thuobr01j.jpg";
import './jotain.css';

const App = () => {



  return (

    <div style={{
      backgroundImage: `url(${taustakuva})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
    }}>
     
      
      
      
  
    

      
      <Appbar />
        

      <Routes>
        <Route path='/' element={<Etusivu />} />
        <Route path='/SormustenRitarit' element={<SormustenRitarit />} />
        <Route path='/KaksiTornia' element={<KaksiTornia />} />
        <Route path='/KuninkaanPaluu' element={<KuninkaanPaluu />} />
        <Route path='/KyselyLomake' element={<KyselyLomake />} />
      </Routes>

    </div>

  );
};


export {App};
