import Container from "react-bootstrap/esm/Container";

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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="https://studentuef-my.sharepoint.com/:i:/r/personal/tanesaar_uef_fi/Documents/Web-%20ja%20mobiilik%C3%A4ytt%C3%B6liittym%C3%A4t%20Projekti/Projekti/Kuvat/ring-4612457_1280.jpg?csf=1&web=1&e=eZ9MOo"
              style={imageStyle}
            />
            <p style={{ color: 'white', fontSize: '20px', marginTop: '25px', fontFamily: 'Papyrus' }}>
              Kuninkaan paluu on J.R.R. Tolkienin trilogian viimeinen osa. Kirja on päätös edellisten kirjojen aloittamasta seikkailusta. Teoksessa seurataan Frodo Reppulin ja seurueen viimeistä taivalta kohti Mordoria, samalla kun Gondorin kuningas Aragorn valmistautuu suureen taisteluun Sauronin pahuutta vastaan. Kuninkaan paluu kuvaa ystävyyden, rohkeuden ja uhrautumisen teemoja sekä lopullista taistelua pimeyttä vastaan. Kirja tuo päätökseen trilogian monimutkaiset juonenkäänteet ja tarjoaa tyydyttävän lopun Keski-Maan kohtalonkäänteille.
            </p>
          </div>
        </Container>
      </Container>


    </>
  );
}
export { KuninkaanPaluu };