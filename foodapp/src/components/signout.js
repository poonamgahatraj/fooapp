import styles from './signout.module.css'


export default function Signout (){
    return(
        <>
        <div className={styles.container}>
            <div style={{display:"flex",flexDirection:"column",gap:"15px",marginTop:"30%"}}>
                <div style={{display:"flex",gap:"15px",alignItems:"center"}}>
<img src='./profile.png' style={{height:"35px"}}></img>
<p style={{color:"white",fontSize:"20px"}}>Profile</p>
                </div>
               <div className={styles.line}></div>
                <div style={{display:"flex",gap:"15px",alignItems:"center"}}>
<img src='./buy.png' style={{height:"35px"}}></img>
<p style={{color:"white",fontSize:"20px"}}>orders</p>
                </div>
                <div className={styles.line}></div>
                <div style={{display:"flex",gap:"15px",alignItems:"center"}}>
<img src='./offer.png' style={{height:"35px"}}></img>
<p style={{color:"white",fontSize:"20px"}}>offer and promo</p>
                </div>
                <div className={styles.line}></div>
                <div style={{display:"flex",gap:"15px",alignItems:"center"}}>
<img src='./note.png' style={{height:"35px"}}></img>
<p style={{color:"white",fontSize:"20px"}}>Privacy policy</p>
                </div>
                <div className={styles.line}></div>
                <div style={{display:"flex",gap:"15px",alignItems:"center"}}>
<img src='./secutity.png' style={{height:"35px"}}></img>
<p style={{color:"white",fontSize:"20px"}}>Security</p>
                </div>
                
            </div>
<img src='./backimg.png'className={styles.imgg1}></img>
            <img src='./image 10.png' className={styles.imgg}></img>
<div style={{position:"absolute",bottom:"5%",display:"flex",gap:"10px",alignItems:"center"}}>
<p style={{color:"white",fontSize:"20px"}}>Sign out</p>
<img src='./Arrow 1.png' style={{height:"20px"}}></img>

</div>
            

        </div>
        </>
    )
}