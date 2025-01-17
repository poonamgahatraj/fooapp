import styles from './addcart.module.css'

export default function Addcart (){
    return(
        <>
        <div className={styles.Container}>
            <div className={styles.content}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
    <img src='./left.png' className={styles.img}></img>
    <img src='./hearrt2.png' className={styles.img}></img>
  </div>

  <div style={{display:"flex",justifyContent:"center"}}>
    <img src='./ffoodie.png'></img>
  </div>
  <div style={{display:"flex",justifyContent:"center"}}>
    <img src='./Group 6.png'></img>
  </div>
  <p className={styles.para}>Veggie tomato mix</p>
  <p className={styles.para} style={{color:"rgba(250, 74, 12, 1)"}}>N1,900</p>
  <p style={{fontWeight:"bold"}}>Delivery info</p>
  <p style={{fontSize:"22px",color:"#A8A8AA"}}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</p>
  <p style={{fontWeight:"bold"}}>Return policy</p>
  <p style={{fontSize:"22px",color:"#A8A8AA"}}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</p>
<div>
<button  className={styles.btn}>
  Add to cart
  </button>
</div>

            </div>

        </div>
        </>
    )
}