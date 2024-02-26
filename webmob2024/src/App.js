import { Appbar } from "./Komponentit/Appbar";
import {Routes, Route} from 'react-router-dom';
import { Etusivu } from "./Komponentit/Etusivu";
import { KaksiTornia } from "./Komponentit/KaksiTornia";
import { SormustenRitarit } from "./Komponentit/SormustenRitarit";
import { KuninkaanPaluu } from "./Komponentit/KuninkaanPaluu";
import { KyselyLomake } from "./Komponentit/KyselyLomake";

const App = () => {



  return (

    <>

      <Appbar />

      <Routes>
        <Route path='/' element={<Etusivu />} />
        <Route path='/SormustenRitarit' element={<SormustenRitarit />} />
        <Route path='/KaksiTornia' element={<KaksiTornia />} />
        <Route path='/KuninkaanPaluu' element={<KuninkaanPaluu />} />
        <Route path='/KyselyLomake' element={<KyselyLomake />} />
      </Routes>

    </>

  );
};


export {App};
