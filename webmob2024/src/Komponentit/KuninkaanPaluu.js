import Container from "react-bootstrap/esm/Container";
import kuva1 from 'C:/Users/Tauno/Desktop/Webmob2024/webmob2024/src/Kuvia/ring-4612457_1280.jpg'

const KuninkaanPaluu = () => {

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
                  Kuninkaan paluu on J.R.R. Tolkienin trilogian viimeinen osa. Kirja on päätös edellisten kirjojen aloittamasta seikkailusta. Teoksessa seurataan Frodo Reppulin ja seurueen viimeistä taivalta kohti Mordoria, samalla kun Gondorin kuningas Aragorn valmistautuu suureen taisteluun Sauronin pahuutta vastaan. Kuninkaan paluu kuvaa ystävyyden, rohkeuden ja uhrautumisen teemoja sekä lopullista taistelua pimeyttä vastaan. Kirja tuo päätökseen trilogian monimutkaiset juonenkäänteet ja tarjoaa tyydyttävän lopun Keski-Maan kohtalonkäänteille.
                </p>
              </div>
            </Container>
          </Container>


        </>
    );
}
export {KuninkaanPaluu};