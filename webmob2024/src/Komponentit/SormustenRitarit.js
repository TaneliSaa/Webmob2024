import Container from "react-bootstrap/esm/Container";

const SormustenRitarit = () => {

  const containerStyle = {

    marginTop: '20px',

  }

  const imageStyle = {
    width: '50%',
    marginBottom: '20px',
  }
  return (

    <>

      <Container className="justify-content-center min-vh-100">


        <Container className="justify-content-center min-vh-20" style={containerStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="https://studentuef-my.sharepoint.com/:i:/r/personal/tanesaar_uef_fi/Documents/Web-%20ja%20mobiilik%C3%A4ytt%C3%B6liittym%C3%A4t%20Projekti/Projekti/Kuvat/lord-of-the-rings-6761163_640.jpg?csf=1&web=1&e=YAyBI5"
              style={imageStyle}
            />
            <p style={{ color: 'white', fontSize: '20px', textAlign: 'center', fontFamily: 'Papyrus' }}>
              Sormusten ritarit on J.R.R. Tolkienin kirjoittama ensimmäinen osa Taru sormusten herrasta -trilogiasta. Kirja vie lukijan mukanaan Keski-Maahan, missä Frodo Reppulin elämä muuttuu odottamattomalla tavalla, kun hän saa tehtäväkseen kantaa mystistä sormusta kohti Mordoria. Frodo saa seurueekseen muiden rotujen edustajia ja heidän matkansa alkaa haltioiden kylästä nimeltään Rivendell. Kirja on täynnä jännittäviä kohtaamisia erilaisten olentojen ja voimien kanssa, paljon lauluja/runoja ja samalla kun se tutkii ystävyyden, rohkeuden ja hyvän voimaa pahuutta vastaan Keski-Maan lumoavassa fantasiamaailmassa.
            </p>
          </div>

        </Container>

      </Container>


    </>
  );
};

export { SormustenRitarit };
