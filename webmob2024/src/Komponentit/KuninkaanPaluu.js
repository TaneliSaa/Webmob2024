

const KuninkaanPaluu = () => {


    return (

        <div style={{
            border: "1px solid red",
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

            <h1 style={{
                color: 'white'
             }}>
                Kirja3
            </h1>
            
        </div>
    );
}
export {KuninkaanPaluu};