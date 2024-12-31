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
        <p style={{color:"white",fontWeight:"bold",fontSize:"60px",lineHeight:"1"}}>Food for 
        Everyone</p>

    </div>
    <div className={styles.Imagecontainer}>
        <img src='./girl.png' className={styles.image1} ></img>
        <img src='./boy.png' className={styles.image2} ></img>
    </div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",background: "linear-gradient(to bottom, rgba(255, 71, 11, 0.1), rgba(255, 71, 11, 1))"}}>
<button className={styles.btn} >Get starteed</button>
</div>
    
</div>

    </div>
        </>
    )
}