

const KuninkaanPaluu = () => {


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
                "Kuninkaan paluu on J.R.R. Tolkienin trilogian viimeinen osa. Kirja on päätös edellisten kirjojen aloittamasta seikkailusta. Teoksessa seurataan Frodo Reppulin ja seurueen viimeistä taivalta kohti Mordoria, samalla kun Gondorin kuningas Aragorn valmistautuu suureen taisteluun Sauronin pahuutta vastaan. Kuninkaan paluu kuvaa ystävyyden, rohkeuden ja uhrautumisen teemoja sekä lopullista taistelua pimeyttä vastaan. Kirja tuo päätökseen trilogian monimutkaiset juonenkäänteet ja tarjoaa tyydyttävän lopun Keski-Maan kohtalonkäänteille.” 
            </p>
            
            
            
        </div>
    );
}
export {KuninkaanPaluu};