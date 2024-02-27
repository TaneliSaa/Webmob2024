

const KyselyLomake = () => {


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
               KyselyLomake
            </p>
            
            
            
        </div>
    );
};
export {KyselyLomake};