import styles from './myprofile.module.css'

export default function Myprofile (){
   return(
       <>
       <div className={styles.container}>
       <div style={{display:"flex",alignItems:"center",gap:"30%",fontWeight:"500"}}>
<img src='./left.png' style={{height:"14px"}}></img>

       </div>
       <p style={{fontSize:"40px",fontWeight:"600"}}>My profile</p>
       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       <p style={{fontWeight:"500"}}> Personal details</p>
       <p style={{color:"rgba(244, 123, 10, 1)"}}>change</p>


       </div>
              <div style={{backgroundColor:"white",borderRadius:"25px"}}>
<div style={{display:"flex",justifyContent:"space-between",padding:"20px",gap:"20px"}}>
<img src='./Rectangle 6 (1).png' style={{height:"60px"}}></img>
<div>
<p style={{fontWeight:"500",margin:"0"}}>Marvis Ighedosa </p>
<p style={{margin:"0"}}>Dosamarvis@gmail.com</p>
<p style={{margin:"0"}}>+234 9011039271</p>
<hr></hr>
<p style={{width:"65%",margin:"0"}}>No 15 uti street off ovie palace road effurun delta state</p>

</div>




</div>

       </div>
<div style={{display:"flex",flexDirection:"column",gap:"20px",marginTop:"30px"}}>
    <div  className={styles.box}>
        <p style={{margin:"0",fontWeight:"bold"}}>Orders</p>
        <img src='./right.png' style={{height:"15px"}}></img>
    </div>
    <div  className={styles.box}>
    <p style={{margin:"0",fontWeight:"bold"}}>Pending reviews</p>
    <img src='./right.png' style={{height:"15px"}}></img>
    </div>
    <div  className={styles.box}>
    <p style={{margin:"0",fontWeight:"bold"}}>Faq</p>
    <img src='./right.png' style={{height:"15px"}}></img>
    </div>
    <div  className={styles.box}>
    <p style={{margin:"0",fontWeight:"bold"}}>Help</p>
    <img src='./right.png' style={{height:"15px"}}></img>
    </div>

</div>

       <button className={styles.btn}>Update  </button>
       </div>
       </>
   )
}