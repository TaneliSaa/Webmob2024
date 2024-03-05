import Container from "react-bootstrap/esm/Container";
import kuva1 from 'C:/Users/Tauno/Desktop/Webmob2024/webmob2024/src/Kuvia/isaac-chou-D1NveCNtt2k-unsplash.jpg'

const Etusivu = () => {

  const containerStyle = {
    
    marginTop: '20px',
    
  }

  const imageStyle = {
    width: '70%',
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
                <p style={{ color: 'white', fontSize: '20px', textAlign: 'center' }}>
                  Tarusormusten herrasta on J.J.R Tolkienin kirjoittama fantasia kirjasarja, joka on jaoteltu kolmeen eri osaan.
                  Osat ovat sormusten ritarit, kaksi tornia ja kuninkaan paluu. Tarinat sijoittuvat Tolkienin luomaan keskimaahan,
                  joka on täynnä eri rotuja kuten hobitteja, kääpiöitä, haltioita, ihmisiä, örkkejä ja muita olentoja. Tämä kirjasarja
                  on hyvin tunnettu ja rakastettu ja ylistetty syvällisestä tarinan kerronnasta.
                </p>
              </div>

            </Container>

            <Container className="justify-content-center min-vh-20" style={containerStyle}>
              <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={kuva1}
                  style={imageStyle}
                />
                <p style={{color: 'white', fontSize: '20px'}}>
                  Hobitit ovat fiktiivisiä olentoja, jotka elävät Keski-Maassa. He ovat pienikokoisia (ei kuitenkaan kääpiöitä), rauhallisia, maanläheisiä ja he rakastavat ruokaa ja juhlia. He eivät yleensä ole seikkailu tahtoisia, vaan he elävät elämänsä yhteisöissä.
                </p>
              </div>
            </Container>

            <Container className="justify-content-center min-vh-20" style={containerStyle}>
              <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={kuva1}
                  style={imageStyle}
                />
                <p style={{color: 'white', fontSize: '20px'}}>
                  Haltiat ovat kauniita ja pitkiä fiktiivisiä olentoja, jotka elävät Keski-Maassa. He ovat taitavia sotureita, taiteilijoita ja he ovat erittäin viisaita. He ovat yhteydessä luontoon ja asuvat eripuolilla Keski-Maan metsiä. Heillä on terävä näkö, kuulo ja muutkin aistit, mikä tekee heistä loistavia sotureita ja metsästäjiä. Haltiat ovat myös loistavia tarinankertojia ja laulajia. Pitkäikäisyyden takia heillä on vahva side historiaan ja perinteisiin.
                </p>
              </div>
            </Container>

            <Container className="justify-content-center min-vh-20" style={containerStyle}>
              <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={kuva1}
                  style={imageStyle}
                />
                <p style={{color: 'white', fontSize: '20px'}}>
                  Kääpiöt ovat tanakoita, parrakkaita ja lyhyitä olentoja, jotka elävät Keski-Maassa. He ovat erikoistuneet kaivoksiin ja kallioiden käsittelyyn. Heillä on vahvat yhteydet kiveen ja metalliin, jonka takia he ovat erinomaisia kaivostyöläisiä ja käsityöläisiä. He ovat erikoistuneet varsinkin aseiden ja sotavarusteiden valmistukseen. Kääpiöt ovat myös tunnettuja rohkeudestaan ja sinnikkyydestään, mikä tekee heistä oivallisia taistelijoita.
                </p>
              </div>
            </Container>

            <Container className="justify-content-center min-vh-20" style={containerStyle}>
              <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={kuva1}
                  style={imageStyle}
                />
                <p style={{color: 'white', fontSize: '20px'}}>
                  Ihmiset ovat monipuolinen rotu verrattuna muihin Keski-Maan rotuihin. Ihmisillä on useita eri kulttuureita ja kansoja. He asuvat erilaisissa yhteisöissä eripuolilla Keski-Maata. He ovat rohkeita, päättäväisiä ja nopeasti sopeutuvia olentoja. Heillä on kuitenkin lyhyempi elinikä verrattuna muihin rotuihin, ja he ovat enemmän altistuvampia pahuuteen ja voimaan kuin muut rodut.
                </p>
              </div>
            </Container>
          </Container>


        </>
    );
}

export { Etusivu };
