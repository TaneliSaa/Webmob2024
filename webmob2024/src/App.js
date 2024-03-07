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

      {/*Navbar*/}
      <Navbar expand="lg" bg="transparent" className='justify-content-center'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
            <Nav className="d-flex align-items-center justify-content-center">
              <Nav.Link style={{ fontSize: '25px', marginRight: '25px', color: 'white'}} href="/">Etusivu</Nav.Link>
              <Nav.Link style={{ fontSize: '25px', marginRight: '25px', color: 'white'}} href="/SormustenRitarit">Kirja1</Nav.Link>
              <Nav.Link style={{ fontSize: '25px', marginRight: '25px', color: 'white'}} href="/KaksiTornia">Kirja2</Nav.Link>
              <Nav.Link style={{ fontSize: '25px', marginRight: '25px', color: 'white'}} href="/KuninkaanPaluu">Kirja3</Nav.Link>
              <Nav.Link style={{ fontSize: '25px', marginRight: '25px', color: 'white'}} href="/Kartat">Kartat</Nav.Link>
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
          <p style={{ fontSize: '15px', color: 'white'}}>Hobitti Hobittinen</p>
          <p style={{ fontSize: '15px', color: 'white'}}>HH@gmail.com</p>
          <p style={{ fontSize: '15px', color: 'white'}}>Hobbingtonintie 25A</p>
          
        </Card.Footer>
      </Card>
    </>

  );
};

export { App };
