import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import { Etusivu } from './Komponentit/Etusivu';
import { SormustenRitarit } from './Komponentit/SormustenRitarit';
import { KaksiTornia } from './Komponentit/KaksiTornia';
import { KuninkaanPaluu } from './Komponentit/KuninkaanPaluu';
import { Kartat } from './Komponentit/Kartat';
import './jotain.css';


const App = () => {

  return (
    
    <>

      {/* Navbar */}
<Navbar expand="lg" bg="transparent" className='justify-content-center'>
  <Container>
    <Navbar.Brand href='/'>
      <img 
        src="https://studentuef-my.sharepoint.com/:i:/r/personal/tanesaar_uef_fi/Documents/Web-%20ja%20mobiilik%C3%A4ytt%C3%B6liittym%C3%A4t%20Projekti/Projekti/Kuvat/armor-1299709_1280.png?csf=1&web=1&e=Dec7P1"
        alt='Logo'
        height='50'
        className='d-inline-block-align-top'
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
      <Nav className="d-flex align-items-center justify-content-center">
        <Nav.Link style={{ fontSize: '25px', marginRight: '25px', color: 'white', fontFamily: 'Papyrus'}} href="/">Etusivu</Nav.Link>
        <Nav.Link style={{ fontSize: '25px', marginRight: '25px', color: 'white', fontFamily: 'Papyrus'}} href="/SormustenRitarit">Sormusten ritarit</Nav.Link>
        <Nav.Link style={{ fontSize: '25px', marginRight: '25px', color: 'white', fontFamily: 'Papyrus'}} href="/KaksiTornia">Kaksi tornia</Nav.Link>
        <Nav.Link style={{ fontSize: '25px', marginRight: '25px', color: 'white', fontFamily: 'Papyrus'}} href="/KuninkaanPaluu">Kuninkaan paluu</Nav.Link>
        <Nav.Link style={{ fontSize: '25px', marginRight: '25px', color: 'white', fontFamily: 'Papyrus'}} href="/Kartat">Kartat</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      {/*Routterit*/}
      <Routes>
        <Route path='/' element={<Etusivu />} />
        <Route path='/SormustenRitarit' element={<SormustenRitarit />} />
        <Route path='/KaksiTornia' element={<KaksiTornia />} />
        <Route path='/KuninkaanPaluu' element={<KuninkaanPaluu />} />
        <Route path='/Kartat' element={<Kartat />} />
      </Routes>

      {/*Footer*/}
      <Card className="bottom w-100" bg="transparent">
        <Card.Footer className="text-muted text-center">
          <p style={{ fontSize: '15px', color: 'white', fontFamily: 'Papyrus'}}>Hobitti Hobittinen</p>
          <p style={{ fontSize: '15px', color: 'white', fontFamily: 'Papyrus'}}>HH@gmail.com</p>
          <p style={{ fontSize: '15px', color: 'white', fontFamily: 'Papyrus'}}>Hobbingtonintie 25A</p>
          
        </Card.Footer>
      </Card>
    </>

  );
};

export { App };
