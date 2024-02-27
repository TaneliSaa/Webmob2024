

const KaksiTornia = () => {


    return (

        <div style={{
            width: "80%",
            height: "80%",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
            '@media (max-width: 600px)': {
                width: '90%',
                height: '90%',
            },
         }}>

            <p style={{
                fontSize: 25,
                color: "white",
                fontFamily: "Helvetica",
                marginBottom: "25px"

            }}>
                ”Kaksi tornia on J.R.R. Tolkienin trilogian toinen osa. Tarina jatkuu edellisen kirjan aloittamasta Frodon ja seurueen matkasta kohti Mordoria. Kirjassa keskitytään seurueen matkaa ja heidän omia päämääriään. Kirja kertoo heidän kohtaloistaan ja seikkailuistaan, jotka liittyvät suurempaan tarinaan Sormuksesta ja sen vaarasta. Teos sisältää monia juonikäänteitä, odottamattomia tapahtumia, uusia hahmoja ja syvällisiä hahmojen kehityksiä, mikä tekee siitä jännittävän jatkon trilogian ensimmäiselle osalle.” 
            </p>
            
            
            
        </div>
    );
}

export {KaksiTornia};