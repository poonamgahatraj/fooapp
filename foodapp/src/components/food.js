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
    <ul style={{listStyle:"none",display:"flex",gap:"50px",fontSize:"20px",paddingLeft:"65px"}}>
    <li>Foods</li>
    <li>Drinks</li>
    <li>Snacks</li>
    <li>Sauce</li>
    </ul>
   
  </div>
            </div>

        </div>
        </>
    )
}