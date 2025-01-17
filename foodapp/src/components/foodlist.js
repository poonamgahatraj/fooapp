import styles from './foodlist.module.css'

export default function Foodlist(){
    return(
        <>
       <div className={styles.Container}>

       
            <div className={styles.Content}>

            <div style={{display:"flex",alignItems:"center",gap:"20px",padding:"20px"}}>
<img src='./left.png' style={{height:"14px"}}></img>
<p style={{fontSize:"17px",fontWeight:"500"}}>Spicy chieckns</p>
        </div>

        <div style={{backgroundColor:"#F9F9F9",borderRadius:'20px',height:"800px",padding:"10%",overflow:"hidden"}}>
<h1 style={{textAlign:"center",fontSize:"25px"}}>Found  6 results</h1>

<div style={{display:"flex",justifyContent:"space-between",marginTop:"30%"}}>
    <div style={{display:"flex",flexDirection:"column",gap:"12%"}}>
<div style={{height:"210px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative"}}>
    <img src='./immg1.png' className={styles.img}></img>
    <div style={{position:"absolute",bottom:"0",left:"10px",textAlign:"center"}}>
    <p style={{fontSize:"22px",fontWeight:"500",width:"125px"}}>Veggie tomato mix</p>
    <p style={{color:"rgba(250, 74, 12, 1)",fontWeight:"500"}}>N1,900</p>
    </div>
 
</div>
<div style={{height:"210px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative",marginTop:"0%"}}>
<img src='./immg2.png' className={styles.img}></img>
<div style={{position:"absolute",bottom:"0",left:"10px",textAlign:"center"}}>
    <p style={{fontSize:"22px",fontWeight:"500",width:"125px"}}>Fried chicken m.</p>
    <p style={{color:"rgba(250, 74, 12, 1)",fontWeight:"500"}}>N1,900</p>
    </div>
</div>
<div style={{height:"210px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative",marginTop:"7%"}}>
<img src='./immg3.png' className={styles.img}></img>
<div style={{position:"absolute",bottom:"0",left:"10px",textAlign:"center"}}>
    <p style={{fontSize:"22px",fontWeight:"500",width:"125px"}}>Veggie tomato mix</p>
    <p style={{color:"rgba(250, 74, 12, 1)",fontWeight:"500"}}>N1,900</p>
    </div>
</div>
</div>

<div style={{display:"flex",flexDirection:"column",gap:"12%",marginTop:"20%"}}>
<div style={{height:"210px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative"}}>
    <img src='./column2.png' className={styles.img}></img>
    <div style={{position:"absolute",bottom:"0",left:"10px",textAlign:"center"}}>
    <p style={{fontSize:"22px",fontWeight:"500",width:"125px"}}>Egg and cucmber...</p>
    <p style={{color:"rgba(250, 74, 12, 1)",fontWeight:"500"}}>N1,900</p>
    </div>
</div>
<div style={{height:"210px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative",marginTop:"70%"}}>
<img src='./immg2.png' className={styles.img}></img>
<div style={{position:"absolute",bottom:"0",left:"10px",textAlign:"center"}}>
    <p style={{fontSize:"22px",fontWeight:"500",width:"125px"}}>Moi-moi and ekpa.</p>
    <p style={{color:"rgba(250, 74, 12, 1)",fontWeight:"500"}}>N1,900</p>
    </div>
</div>
<div style={{height:"210px",width:"150px",backgroundColor:"white",borderRadius:"20px",position:"relative",marginTop:"70%"}}>
<img src='./column2.png' className={styles.img}></img>
<div style={{position:"absolute",bottom:"0",left:"10px",textAlign:"center"}}>
    <p style={{fontSize:"22px",fontWeight:"500",width:"125px"}}>Veggie tomato mix</p>
    <p style={{color:"rgba(250, 74, 12, 1)",fontWeight:"500"}}>N1,900</p>
    </div>
</div>
</div>


  
       
            </div>

        </div>
        </div>
        </div>
        </>
    )
}