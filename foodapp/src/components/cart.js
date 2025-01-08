 import styles from './cart.module.css'
 
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
<div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
<div style={{padding:"15px",backgroundColor:"white",borderRadius:"25px", display:"flex",alignItems:"center",gap:"20px",position:'relative'}}>
        <div >
        <img src='./img22.png' ></img>
        </div>
       
        <div>
            <p style={{fontSize:"18px",fontWeight:"500",margin:"0"}} >Veggie tomato mix</p>
            <p style={{fontSize:"18px",fontWeight:"500",color:"rgba(250, 74, 12, 1)",margin:"0"}} >#1,900</p>
        </div>
<button className={styles.btn}>- 1 +</button>
       </div>


       <div style={{padding:"15px",backgroundColor:"white",borderRadius:"25px", display:"flex",alignItems:"center",gap:"20px",position:'relative'}}>
        <div >
        <img src='./immgg.png' ></img>
        </div>
       
        <div>
            <p style={{fontSize:"18px",fontWeight:"500",margin:"0"}} >Fishwith mix orange....</p>
            <p style={{fontSize:"18px",fontWeight:"500",color:"rgba(250, 74, 12, 1)",margin:"0"}} >#1,900</p>
        </div>
<button className={styles.btn}>- 1 +</button>
       </div>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"25px"}}>
<div style={{padding:"15px",backgroundColor:"white",borderRadius:"25px", display:"flex",alignItems:"center",gap:"20px",position:'relative',width:"80%",marginLeft:"-30%"}}>
        <div >
        <img src='./img22.png' ></img>
        </div>
       
        <div>
            <p style={{fontSize:"18px",fontWeight:"500",margin:"0"}} >Veggie tomato mix</p>
            <p style={{fontSize:"18px",fontWeight:"500",color:"rgba(250, 74, 12, 1)",margin:"0"}} >#1,900</p>
        </div>
<button className={styles.btn}>- 1 +</button>
       </div>

       <div style={{display:"flex",gap:'20px'}}>
        <div style={{height:"60px",width:"60px",backgroundColor:"red",borderRadius:"50%", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src='./heartt.png'></img>
        </div>
       
        <div style={{height:"60px",width:"60px",backgroundColor:"red",borderRadius:"50%", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src='./dustbin.png'></img>
        </div>

       </div>
</div>
      
<button className={styles.btnn}>Complete order</button>
</div>
      


        </div>
        </>
    )
 }