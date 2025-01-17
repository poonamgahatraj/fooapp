import styles from './history.module.css'

export default function Order (){
    return(
        <>
        <div className={styles.container}>
        <div style={{display:"flex",alignItems:"center",gap:"30%",fontWeight:"500"}}>
<img src='./left.png' style={{height:"14px"}}></img>
<p>Orders</p>
       </div>

       <div style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center",marginTop:"40%"}}>
        <img src='./cartt.png' style={{height:"100px",width:"100px"}}></img>
        <p style={{fontWeight:"500",fontSize:"35px"}}>No orders yet</p>
        <p style={{textAlign:"center",width:"60%"}}>Hit the orange button down
        below to Create an order</p>

       </div>
       <button className={styles.btnn}>Start odering</button>
        </div>
        </>
    )
}