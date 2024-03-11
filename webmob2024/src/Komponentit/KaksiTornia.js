import Container from "react-bootstrap/esm/Container";

const KaksiTornia = () => {

  const containerStyle = {

    marginTop: '20px',

  }

  const imageStyle = {
    width: '100%',
    marginBottom: '20px',
  }

  return (

    <>

      <Container className="justify-content-center min-vh-100">
        <Container className="justify-content-center min-vh-20" style={containerStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="https://studentuef-my.sharepoint.com/:i:/r/personal/tanesaar_uef_fi/Documents/Web-%20ja%20mobiilik%C3%A4ytt%C3%B6liittym%C3%A4t%20Projekti/Projekti/Kuvat/felipe-salgado-Z4BJfx59yqY-unsplash.jpg?csf=1&web=1&e=3YZUcg"
              style={imageStyle}
            />
            <p style={{ color: 'white', fontSize: '20px', marginTop: '25px', fontFamily: 'Papyrus' }}>
              Kaksi tornia on J.R.R. Tolkienin trilogian toinen osa. Tarina jatkuu edellisen kirjan aloittamasta Frodon ja seurueen matkasta kohti Mordoria. Kirjassa keskitytään seurueen matkaa ja heidän omia päämääriään. Kirja kertoo heidän kohtaloistaan ja seikkailuistaan, jotka liittyvät suurempaan tarinaan Sormuksesta ja sen vaarasta. Teos sisältää monia juonikäänteitä, odottamattomia tapahtumia, uusia hahmoja ja syvällisiä hahmojen kehityksiä, mikä tekee siitä jännittävän jatkon trilogian ensimmäiselle osalle.
            </p>
          </div>
        </Container>
      </Container>


    </>
  );
}

export { KaksiTornia };