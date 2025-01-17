
import styles from './offers.module.css'


export default function Offers(){
    return(
        <>
        <div className={styles.container}>
        <div style={{display:"flex",alignItems:"center",gap:"30%",fontWeight:"500"}}>
<img src='./left.png' style={{height:"14px"}}></img>

       </div>
       <p style={{fontSize:"40px",fontWeight:"600"}}>My offers</p>

       <div style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center",marginTop:"80%"}}>
       
        <p style={{fontWeight:"500",fontSize:"35px",margin:"0"}}>ohh snap!  No offers yet</p>
        <p style={{textAlign:"center",width:"50%",color:"#8D8D8E"}}>Bella dose’t have any offers
        yet please check again.</p>

       </div>
        </div>
        </>
    )
}