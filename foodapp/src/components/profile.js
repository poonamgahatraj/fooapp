 import styles from './profile.module.css'

 export default function Profile (){
    return(
        <>
        <div className={styles.container}>
        <div style={{display:"flex",alignItems:"center",gap:"30%",fontWeight:"500"}}>
<img src='./left.png' style={{height:"14px"}}></img>
<p>My profile</p>
        </div>
        <p style={{fontWeight:"500",marginTop:"10%"}}>Information</p>
        <div style={{height:"150px",backgroundColor:"white",borderRadius:"25px"}}>
<div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
    <img src='./Rectangle 6 (1).png' style={{height:"60px"}}></img>
   <div style={{marginLeft:"20px"}}>
    <p style={{margin:"0",lineHeight:"1.5"}}>Marvis Ighedosa</p>
    <p style={{margin:"0",fontSize:"18px"}}>dosamarvis@gmail.com</p>
    <p style={{fontSize:"18px"}}>No 15 uti street off ovie palace road effurun delta state</p>
   </div>
   <img src='./pen.png' style={{height:"25px"}}></img>

</div>

        </div>
        <p style={{fontWeight:"500",marginTop:"10%"}}>Payment Method</p>

        <div style={{backgroundColor:"white",borderRadius:"25px",padding:"20px"}}>
<div style={{display:"flex",gap:"5%",alignItems:"center"}}>
    <input type='radio'></input>
    <div className={styles.box}>
        <img src='./card.png' style={{height:"15px"}}></img>
    </div>
    <p>Card</p>

</div>

<hr style={{marginLeft:"10%"}}></hr>
<div style={{display:"flex",gap:"5%",alignItems:"center"}}>
    <input type='radio'></input>
    <div className={styles.box2}>
        <img src='./bank.png' style={{height:"15px"}}></img>
    </div>
    <p>Bank account</p>

</div>
<hr style={{marginLeft:"10%"}}></hr>
<div style={{display:"flex",gap:"5%",alignItems:"center"}}>
    <input type='radio'></input>
    <div className={styles.box3}>
        <img src='./paypal.png' style={{height:"15px"}}></img>
    </div>
    <p> Paypal</p>

</div>



        </div>

        <button className={styles.btn}>Updatet</button>
        </div>
        </>
    )
 }