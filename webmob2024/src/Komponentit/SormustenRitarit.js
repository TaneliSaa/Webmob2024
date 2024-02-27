

const SormustenRitarit = () => {



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
                "Sormusten ritarit on J.R.R. Tolkienin kirjoittama ensimmäinen osa Taru sormusten herrasta -trilogiasta. Kirja vie lukijan mukanaan Keski-Maahan, missä Frodo Reppulin elämä muuttuu odottamattomalla tavalla, kun hän saa tehtäväkseen kantaa mystistä sormusta kohti Mordoria. Frodo saa seurueekseen muiden rotujen edustajia ja heidän matkansa alkaa haltioiden kylästä nimeltään Rivendell. Kirja on täynnä jännittäviä kohtaamisia erilaisten olentojen ja voimien kanssa, paljon lauluja/runoja ja samalla kun se tutkii ystävyyden, rohkeuden ja hyvän voimaa pahuutta vastaan Keski-Maan lumoavassa fantasiamaailmassa.” 
            </p>
            
            
            
        </div>
    );
};

export {SormustenRitarit};