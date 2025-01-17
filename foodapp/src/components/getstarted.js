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
    <div style={{display:"flex",position:"absolute",bottom:"50px",zIndex:"5"}}>
    <img src='./girlrec.png'></img>
    <img src='./boyrec.png'></img>

    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button style={{
                            color:  "rgba(250, 74, 12, 1)",
                            backgroundColor:"white",
                            borderRadius: "20px",
                            padding: "20px",
                          
                            border: "none",
                            boxSizing:"border-box",
                           marginBottom:"5%",
                           position:"absolute",
                           bottom:"0",
                           zIndex:"6",
                         width:"  calc(100% - 60px)"
                        }}>getstarted</button>
    </div>
                       
                   
    
</div>

    </div>
        </>
    )
}