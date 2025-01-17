import styles from './food.module.css'

export default function Food (){
    return(
        <>
        <div className={styles.Container}>
            <div className={styles.content}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"30px"}}>

    <img src="./threeline.png"></img>
    <img src="./shopping cart.png"></img>
  </div>

  <div style={{padding:"30px"}}>
<p style={{fontWeight:"bold",fontSize:"40px",width:"70%",lineHeight:"1",margin:"0"}}>Delicious 
food for you</p>
  </div>

  <div style={{padding:"30px"}}>
<div style={{width:"100%",borderRadius:"50px",backgroundColor:"rgba(239, 238, 238, 1)",display:'flex',alignItems:"center",padding:"25px",boxSizing:"border-box",gap:"20px"}}>
<img src='./search.png'></img>
<p style={{margin:"0"}}>Search</p>

</div>
  </div>

  <div >
    <ul style={{listStyle:"none",display:"flex",gap:"28px",fontSize:"20px",paddingLeft:"65px"}}>
    <li style={{color:"rgba(250, 74, 12, 1)",borderBottom:"1px solid rgba(250, 74, 12, 1)",padding:"10px"}}>Foods</li>
    <li style={{padding:"10px",color:"rgba(154, 154, 157, 1)"}}>Drinks</li>
    <li style={{padding:"10px",color:"rgba(154, 154, 157, 1)"}}>Snacks</li>
    <li style={{padding:"10px",color:"rgba(154, 154, 157, 1)"}}>Sauce</li>
    </ul>
   
  </div>
  <div style={{display:"flex",gap:"20px",padding:"30px",position:'relative'}}>
    <div style={{backgroundColor:"white",height:'300px',width:"230px",borderRadius:"25px",position:"relative",top:"35px",boxShadow:"rgba(57, 57, 57, 0.1)"}}>
        <img src='./food1.png' style={{position:"absolute",top:"-18%",left:"-5%"}}></img>
        <p className={styles.para}>Veggie tomato mix</p>
        <p className={styles.price}>N1,900</p>
    </div>

    <div style={{backgroundColor:"white",height:'300px',width:"230px",borderRadius:"25px",position:"absolute",top:"65px",left:"72%",boxShadow:"rgba(57, 57, 57, 0.1)"}}>
        <img src='./food1.png' style={{position:"absolute",top:"-18%",left:"-5%"}}></img>
        <p className={styles.para}>Spicy fish sauce</p>
        <p className={styles.price}>N2,300.99</p>
    </div>

  </div>

  <div style={{display:"flex",justifyContent:"space-between",padding:'30px'}}>
    <img src='./home.png' style={{height:"20px",boxShadow:"rgba(215, 56, 0, 0.4)"}}></img>
    <img src='./heart.png' style={{height:"20px"}}></img>
    <img src='./user.png' style={{height:"20px"}}></img>
    <img src='./timer.png' style={{height:"20px"}}></img>
  </div>
            </div>

        </div>
        </>
    )
}