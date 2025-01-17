import styles from './checkout.module.css'

export default function Paymentcheckout (){
   return(
       <>
       <div className={styles.container}>
       <div style={{display:"flex",alignItems:"center",gap:"30%",fontWeight:"500"}}>
<img src='./left.png' style={{height:"14px"}}></img>
<p>Checkout</p>
       </div>
       <p style={{fontSize:"40px",fontWeight:"600"}}>Payment</p>

       <p style={{fontWeight:"500"}}>Payment Method</p>

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

</div>


     
           
       <p style={{fontWeight:"500"}}>Delivery method.</p>

       <div style={{backgroundColor:"white",borderRadius:"25px",padding:"20px"}}>
<div style={{display:"flex",gap:"5%",alignItems:"center"}}>
   <input type='radio'></input>
 
   <p>Door delivery</p>

</div>

<hr style={{marginLeft:"10%"}}></hr>
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