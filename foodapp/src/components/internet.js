import styles from './internet.module.css'

export default function Internet (){
    return(
        <>
        <div className={styles.container}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center"}}>
        <img src='./wifi.png' style={{height:"100px",width:"100px",marginTop:"50%"}}></img>
        <p style={{fontWeight:"500",fontSize:"35px"}}>No internet Connection</p>
        <p style={{textAlign:"center",width:"65%",color:"#8D8D8E"}}>Your internet connection is currently
        not available please check or try again.</p>

       </div>
       <div style={{padding:"25px"}}>
        <button style={{width:'100%',padding:"20px",borderRadius:"25px",color:"white",backgroundColor:"rgba(250, 74, 12, 1)",border:"none"}}>
        Try again
        </button>
       </div>
        </div>
        </>
    )
}