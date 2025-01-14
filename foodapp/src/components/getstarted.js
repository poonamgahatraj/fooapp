import styles from './getstarted.module.css'

export default function Getstarted(){
    return(
        <>
    <div className={styles.container}>
<div className={styles.content}>
    <div style={{padding:"50px"}}>
        <div style={{height:"55px",width:"55px",borderRadius:"50%",backgroundColor:"white",alignContent:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src='./logo2.png' style={{height:"35px",width:"35px"}}></img>
          
        </div>
        <p style={{color:"white",fontWeight:"bold",fontSize:"65px",lineHeight:"1"}}>Food for 
        Everyone</p>

    </div>
    <div className={styles.Imagecontainer}>
        <img src='./girl.png' className={styles.image1} ></img>
        <img src='./boy.png' className={styles.image2} ></img>
    </div>
    <div style={{ position: "absolute", width: "100%", bottom: "0px", padding: "0 20px" ,boxSizing:"border-box",height:"200px",zIndex:"5",display:"flex",justifyContent:"flex-end",alignItems:"center",flexDirection:"column",background: "linear-gradient(to top, rgba(255, 71, 11, 1), rgba(255, 71, 11, 0.1))"}}>
                        <button style={{
                            color:  "rgba(250, 74, 12, 1)",
                            backgroundColor:"white",
                            borderRadius: "20px",
                            padding: "20px",
                           width:"100%",
                            border: "none",
                            boxSizing:"border-box",
                           marginBottom:"5%"
                        }}>getstarted</button>
                    </div>
    
</div>

    </div>
        </>
    )
}