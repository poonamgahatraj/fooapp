import styles from './foodlist.module.css'

export default function Foodlist(){
    return(
        <>
       <div className={styles.Container}>

       
            <div className={styles.Content}>

            <div style={{display:"flex",alignItems:"center",gap:"20px",padding:"20px"}}>
<img src='./left.png' style={{height:"14px"}}></img>
<p>Spicy chieckns</p>
        </div>

        <div style={{backgroundColor:"#F9F9F9",borderRadius:'20px',height:"100%",padding:"10%"}}>
<h1 style={{textAlign:"center",fontSize:"25px"}}>Found  6 results</h1>

<div style={{display:"flex",justifyContent:"space-between",marginTop:"30%"}}>
    <div style={{display:"flex",flexDirection:"column",gap:"10%"}}>
<div style={{height:"160px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative"}}>
    <img src='./immg1.png' className={styles.img}></img>
</div>
<div style={{height:"160px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative"}}>
<img src='./immg2.png' className={styles.img}></img>
</div>
<div style={{height:"160px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative"}}>
<img src='./immg3.png' className={styles.img}></img>
</div>
</div>

<div style={{display:"flex",flexDirection:"column",gap:"50px",marginTop:"10%"}}>
<div style={{height:"160px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative"}}>
<img src='./immg1.png' className={styles.img}></img>
</div>
<div style={{height:"160px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative"}}>
<img src='./immg1.png' className={styles.img}></img>
</div>
<div style={{height:"160px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative"}}>
<img src='./immg1.png' className={styles.img}></img>
</div>
</div>


  
       
            </div>

        </div>
        </div>
        </div>
        </>
    )
}