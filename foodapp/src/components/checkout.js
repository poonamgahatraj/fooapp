import styles from './checkout.module.css'

export default function Checkout (){
   return(
       <>
       <div className={styles.container}>
       <div style={{display:"flex",alignItems:"center",gap:"30%",fontWeight:"500"}}>
<img src='./left.png' style={{height:"14px"}}></img>
<p>Checkout</p>
       </div>
       <p style={{fontSize:"40px",fontWeight:"600"}}>Delivery</p>
       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       <p style={{fontWeight:"500"}}>Address details</p>
       <p style={{color:"rgba(244, 123, 10, 1)"}}>change</p>


       </div>
              <div style={{backgroundColor:"white",borderRadius:"25px"}}>
<div style={{display:"flex",justifyContent:"space-between",padding:"20px",flexDirection:"column"}}>
<p style={{fontWeight:"500",margin:"0"}}>Marvis Kparobo</p>
<hr></hr>
<p style={{width:"62%",margin:"0"}}>Km 5 refinery road oppsite re
public road, effurun, delta state</p>
<hr></hr>
<p style={{margin:"0"}}>+234 9011039271</p>


</div>

       </div>
       <p style={{fontWeight:"500"}}>Delivery method.</p>

       <div style={{backgroundColor:"white",borderRadius:"25px",padding:"20px"}}>
<div style={{display:"flex",gap:"5%",alignItems:"center"}}>
   <input type='radio'></input>
 
   <p>Door delivery</p>

</div>

<hr></hr>
<div style={{display:"flex",gap:"5%",alignItems:"center"}}>
   <input type='radio'></input>
  
   <p>Pick up</p>

</div>





       </div>

       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       <p>Total</p>
       <p style={{fontWeight:"500",fontSize:"30px"}}>23,000</p>
       </div>

       <button className={styles.btn}>Proceed to payment</button>
       </div>
       </>
   )
}