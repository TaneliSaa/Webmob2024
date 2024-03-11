import Container from "react-bootstrap/esm/Container";

import kuva1 from 'C:/Users/Tauno/Webmob2024/webmob2024/src/Kuvia/isaac-chou-D1NveCNtt2k-unsplash.jpg'
import kuva2 from 'C:/Users/Tauno/Webmob2024/webmob2024/src/Kuvia/hobbit-7457589_1280.jpg'
import kuva3 from 'C:/Users/Tauno/Webmob2024/webmob2024/src/Kuvia/rivendell-7713475_1280.jpg'
import kuva4 from 'C:/Users/Tauno/Webmob2024/webmob2024/src/Kuvia/mountain-6213567_1280.jpg'
import kuva5 from 'C:/Users/Tauno/Webmob2024/webmob2024/src/Kuvia/golden-kingdom-8164867_1280.png'

const Etusivu = () => {

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
              src={kuva1}
              style={imageStyle}
            />
            <p style={{ color: 'white', fontSize: '20px', textAlign: 'center', fontFamily: 'Papyrus' }}>
              Tarusormusten herrasta on eeppinen matka Keski-Maahan, jossa kohtalo punoo tarinan sormuksista, voimasta ja rohkeudesta. J.R.R. Tolkienin mestarillisesti kudottu kirjasarja kuljettaa lukijan läpi Sormusten ritarien, Kaksi tornia ja Kuninkaan paluun, paljastaen maailman täynnä lumoavia maisemia, vaarallisia seikkailuja ja syvällisiä hahmoja. Keski-Maa on paikka, jossa kohtaavat viisaus ja pimeys, ystävyys ja petos. Hobitit, haltiat, kääpiöt ja ihmiset yhdistyvät taistelemaan pahuutta vastaan, kun synkkä varjo levittää peittonsa maan ylle. Taru ei ole pelkästään sankaritekojen kertomus, vaan se on myös tutkimus ystävyyden voimasta ja sisäisestä voimasta, joka herää eloon silloin, kun sitä eniten tarvitaan. Tarusormusten herrasta on kirjasarja, joka on hurmannut sukupolvia syvällisyydellään, lumoavilla hahmoillaan ja vaikuttavalla tarinankerronnallaan. Luvassa on matka, joka herättää tunteita ja avaa oven Keski-Maan maailmaan, joka odottaa löytäjiään. Tervetuloa seikkailuun, joka on jättänyt pysyvän jäljen fantasiakirjallisuuden sydämiin.
            </p>
          </div>

        </Container>

        <Container className="justify-content-center min-vh-20" style={containerStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={kuva2}
              style={imageStyle}
            />
            <p style={{ color: 'white', fontSize: '20px', fontFamily: 'Papyrus' }}>
              Hobitit ovat fiktiivisiä olentoja, jotka elävät Keski-Maassa. He ovat pienikokoisia (ei kuitenkaan kääpiöitä), rauhallisia, maanläheisiä ja he rakastavat ruokaa ja juhlia. He eivät yleensä ole seikkailu tahtoisia, vaan he elävät elämänsä yhteisöissä. Hobitit ovat yleensä noin 3-4 jalkaa pitkiä, pyöreitä ja parrakkaan näköisiä. He ovat rauhanomaisia ja ystävällisiä olentoja, jotka asuvat mukavissa maakuopissaan. Heidän yhteisönsä keskittyy pääasiassa maatalouteen ja viihtyisään elämään.
            </p>
          </div>
        </Container>

        <Container className="justify-content-center min-vh-20" style={containerStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={kuva3}
              style={imageStyle}
            />
            <p style={{ color: 'white', fontSize: '20px', fontFamily: 'Papyrus' }}>
              Haltiat ovat kauniita ja pitkiä fiktiivisiä olentoja, jotka elävät Keski-Maassa. He ovat ihmismäisen näköisiä, mutta heillä on yliluonnollinen kauneus ja hehkuvat valoa. He ovat mestareita taikuudessa, taistelutaidoissa ja taitavissa käsityössä. He rakastavat musiikkia, laulua ja taidetta, ja monet haltiayhteisöt sijaitsevat maagisissa metsissä tai kauniilla rannoilla. He ovat yleensä pitkäikäisiä ja he voivat säilyttää nuorekkuutensa ja voimansa pitkään. He ovat myös loistavia tarinankertojia ja laulajia. He ovat myös luonteeltaan jalomielisiä ja huolehtivia maailmastaan. Heidän yhteiskuntansa perustuu viisauteen ja kunnioitukseen luontoa kohtaan.
            </p>
          </div>
        </Container>

        <Container className="justify-content-center min-vh-20" style={containerStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={kuva4}
              style={imageStyle}
            />
            <p style={{ color: 'white', fontSize: '20px', fontFamily: 'Papyrus' }}>
              Kääpiöt ovat tanakoita, parrakkaita ja lyhyitä olentoja, jotka elävät Keski-Maassa. Kääpiöillä on taipumus olla voimakkaasti sidoksissa kivimateriaaleihin, erityisesti kultaan ja jalokiviin. Kääpiöt ovat yleensä voimakkaita ja sotaisia, ja monet heistä kantavat pitkiä partoja ja raskaita aseita. Heidän yhteisönsä perustuvat usein klaaneihin ja sukujen perinteisiin, ja heillä on vahva yhteishenki. Kääpiöt ovat myös tunnettuja rohkeudestaan ja sinnikkyydestään, mikä tekee heistä oivallisia taistelijoita.
            </p>
          </div>
        </Container>

        <Container className="justify-content-center min-vh-20" style={containerStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={kuva5}
              style={imageStyle}
            />
            <p style={{ color: 'white', fontSize: '20px', fontFamily: 'Papyrus' }}>
              Ihmiset ovat monipuolinen rotu verrattuna muihin Keski-Maan rotuihin. Ihmiset ovat usein lyhyemmällä elinkaarellaan verrattuna haltioihin ja kääpiöihin, mutta tämä tekee heistä dynaamisen ja nopeasti sopeutuvan rodun. Ihmisten yhteisöt vaihtelevat laidasta laitaan, aina mahtavista kuningaskunnista pieniin kyliin ja erämajoilta vilkkaisiin kaupunkeihin. Ihmiset ovat mestareita monilla alueilla, kuten sodankäynnissä, taikuudessa ja käsityössä. Heidän tarinansa kietoutuvat usein suurten taisteluiden ja poliittisten valtataisteluiden ympärille, ja monet heistä nousevat sankarillisesti kohtaamaan kohtalonsa.
            </p>
          </div>
        </Container>
      </Container>


    </>
  );
}

export { Etusivu };
