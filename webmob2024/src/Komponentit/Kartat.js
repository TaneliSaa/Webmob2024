import React from "react";
import Container from "react-bootstrap/esm/Container";

const Kartat = () => {
  const containerStyle = {
    marginTop: '20px',
  };

  return (
    <>
      {/* Mordor */}
      <Container className="justify-content-center min-vh-100" id="mordor-section">
        <h2 style={{color: 'white'}}>Mordor - Tongariro National Park</h2>
        <Container className="justify-content-center min-vh-20" style={containerStyle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49475.261345635736!2d175.52171392167966!3d-39.1928169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6b001d8474a167%3A0xf00ef62249d5650!2sTongariron%20kansallispuisto!5e0!3m2!1sfi!2sfi!4v1709818327010!5m2!1sfi!2sfi"
            width="1190"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p style={{ color: 'white', fontSize: '20px', marginTop: '25px', fontFamily: 'Papyrus' }}>
            Yksi tunnetuimmista kuvauspaikoista Uudessa-Seelannissa.
          </p>
        </Container>
      </Container>

      {/* Hobbington */}
      <Container className="justify-content-center min-vh-100" id="hobbington-section">
        <h2 style={{color: 'white'}}>Hobbington - Matamata, Uusi-Seelanti</h2>
        <Container className="justify-content-center min-vh-20" style={containerStyle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100822.57354330606!2d175.67163981966058!3d-37.843781580411296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c4e27e17a16a9%3A0x500ef6143a2e1b0!2sMatamata%2C%20Uusi-Seelanti!5e0!3m2!1sfi!2sfi!4v1709818542066!5m2!1sfi!2sfi"
            width="1190"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p style={{ color: 'white', fontSize: '20px', marginTop: '25px', fontFamily: 'Papyrus' }}>
            Tämä on Hobbingtonin kuvauspaikka.
          </p>
        </Container>
      </Container>

      {/* The Paths of the Dead */}
      <Container className="justify-content-center min-vh-100" id="paths-section">
        <h2 style={{color: 'white'}}>The Paths of the Dead - Putangirua Pinnacles</h2>
        <Container className="justify-content-center min-vh-20" style={containerStyle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.7090838442723!2d175.24538217688743!3d-41.445533650199906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d4740ea4957d013%3A0xde40b56c0953f0b9!2sPutangirua%20Pinnacles!5e0!3m2!1sfi!2sfi!4v1709818639895!5m2!1sfi!2sfi"
            width="1190"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p style={{ color: 'white', fontSize: '20px', marginTop: '25px', fontFamily: 'Papyrus' }}>
            Tämä on yksi tunnettu kuvauspaikka kolmannesta elokuvasta.
          </p>
        </Container>
      </Container>

      {/* Erodas */}
      <Container className="justify-content-center min-vh-100" id="erodas-section">
        <h2 style={{color: 'white'}}>Erodas - Mount Sunday</h2>
        <Container className="justify-content-center min-vh-20" style={containerStyle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.8159039708366!2d170.89033842698063!3d-43.5478792829794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c067be331c8f9%3A0xedcc412bd973df5d!2sMount%20Sunday!5e0!3m2!1sfi!2sfi!4v1709818726352!5m2!1sfi!2sfi"
            width="1190"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p style={{ color: 'white', fontSize: '20px', marginTop: '25px', fontFamily: 'Papyrus' }}>
            Tämä on Erodas kuvauspaikka
          </p>
        </Container>
      </Container>
    </>
  );
};

export { Kartat };
