 import styles from './addcart.module.css'
 
 export default function Cart () {
    return(
        <>
        <div className={styles.container} >
        <div style={{display:"flex",alignItems:"center",gap:"30%",fontWeight:"500"}}>
<img src='./left.png' style={{height:"14px"}}></img>
<p>Cart</p>
       </div>

       <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
        <img src='./swipe.png' style={{height:"12px"}}></img>
        <p style={{fontSize:"12px"}}>swipe on an item to delete</p>
       </div>

       <div style={{padding:"15px",backgroundColor:"white",borderRadius:"25px", display:"flex",alignItems:"center"}}>
        <div style={{marginLeft:"-20px"}}>
        <img src='./cartimg.png' style={{height:"150px"}}></img>
        </div>
       
        <div>
            <p style={{fontSize:"18px",fontWeight:"500",margin:"0"}} >Veggie tomato mix</p>
            <p style={{fontSize:"18px",fontWeight:"500",color:"rgba(250, 74, 12, 1)",margin:"0"}} >#1,900</p>
        </div>
       </div>
        </div>
        </>
    )
 }