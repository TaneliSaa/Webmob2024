import Container from "react-bootstrap/esm/Container";
import kuva1 from 'C:/Users/Tauno/Desktop/Webmob2024/webmob2024/src/Kuvia/felipe-salgado-Z4BJfx59yqY-unsplash.jpg'

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
                <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src={kuva1}
                    style={imageStyle}
                  />
                  <p style={{color: 'white', fontSize: '20px', marginTop: '25px'}}>
                    Kaksi tornia on J.R.R. Tolkienin trilogian toinen osa. Tarina jatkuu edellisen kirjan aloittamasta Frodon ja seurueen matkasta kohti Mordoria. Kirjassa keskitytään seurueen matkaa ja heidän omia päämääriään. Kirja kertoo heidän kohtaloistaan ja seikkailuistaan, jotka liittyvät suurempaan tarinaan Sormuksesta ja sen vaarasta. Teos sisältää monia juonikäänteitä, odottamattomia tapahtumia, uusia hahmoja ja syvällisiä hahmojen kehityksiä, mikä tekee siitä jännittävän jatkon trilogian ensimmäiselle osalle.
                  </p>
                </div>
              </Container>
          </Container>


        </>
    );
}

export {KaksiTornia};