

const Etusivu = () => {

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
                ”Tarusormusten herrasta on J.J.R Tolkienin kirjoittama fantasia kirjasarja, joka on jaoteltu kolmeen eri osaan. Osat ovat sormusten ritarit, kaksi tornia ja kuninkaan paluu. Tarinat sijoittuvat Tolkienin luomaan keskimaahan, joka on täynnä eri rotuja kuten hobitteja, kääpiöitä, haltioita, ihmisiä, örkkejä ja muita olentoja. Tämä kirjasarja on hyvin tunnettu ja rakastettu ja ylistetty syvällisestä tarinan kerronnasta.” 
            </p>
            
            <p style={{
                fontSize: 25,
                color: "white",
                fontFamily: "Helvetica",
                marginBottom: "25px"

            }}>
                ”Hobitit ovat fiktiivisiä olentoja, jotka elävät Keski-Maassa. He ovat pienikokoisia (ei kuitenkaan kääpiöitä), rauhallisia, maanläheisiä ja he rakastavat ruokaa ja juhlia. He eivät yleensä ole seikkailu tahtoisia, vaan he elävät elämänsä yhteisöissä.” 
            </p>
           
            <p style={{
                fontSize: 25,
                color: "white",
                fontFamily: "Helvetica",
                marginBottom: "25px"

            }}>
                ”Haltiat ovat kauniita ja pitkiä fiktiivisiä olentoja, jotka elävät Keski-Maassa. He ovat taitavia sotureita, taiteilijoita ja he ovat erittäin viisaita. He ovat yhteydessä luontoon ja asuvat eripuolilla Keski-Maan metsiä. Heillä on terävä näkö, kuulo ja muutkin aistit, mikä tekee heistä loistavia sotureita ja metsästäjiä. Haltiat ovat myös loistavia tarinankertojia ja laulajia. Pitkäikäisyyden takia heillä on vahva side historiaan ja perinteisiin.” 
            </p>
            
            <p style={{
                fontSize: 25,
                color: "white",
                fontFamily: "Helvetica",
                marginBottom: "25px"

            }}>
                ”Kääpiöt ovat tanakoita, parrakkaita ja lyhyitä olentoja, jotka elävät Keski-Maassa. He ovat erikoistuneet kaivoksiin ja kallioiden käsittelyyn. Heillä on vahvat yhteydet kiveen ja metalliin, jonka takia he ovat erinomaisia kaivostyöläisiä ja käsityöläisiä. He ovat erikoistuneet varsinkin aseiden ja sotavarusteiden valmistukseen. Kääpiöt ovat myös tunnettuja rohkeudestaan ja sinnikkyydestään, mikä tekee heistä oivallisia taistelijoita.” 
            </p>
           
            <p style={{
                fontSize: 25,
                color: "white",
                fontFamily: "Helvetica",
                marginBottom: "25px"

            }}>
                ”Ihmiset ovat monipuolinen rotu verrattuna muihin Keski-Maan rotuihin. Ihmisillä on useita eri kulttuureita ja kansoja. He asuvat erilaisissa yhteisöissä eripuolilla Keski-Maata. He ovat rohkeita, päättäväisiä ja nopeasti sopeutuvia olentoja. Heillä on kuitenkin lyhyempi elinikä verrattuna muihin rotuihin, ja he ovat enemmän altistuvampia pahuuteen ja voimaan kuin muut rodut.”
            </p>
            
        </div>
    );
}

export { Etusivu };
