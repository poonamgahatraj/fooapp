import styles from './login.module.css'

export default function Login(){
    return(
        <>
        <div className={styles.Container}>
            <div className={styles.Content}>

<div className={styles.subcontent}>
    <div className={styles.imagecontainer}>
        <img src='./logo2.png' style={{height:"14vh",marginTop:"10%"}}></img>
    </div>
    <div style={{display:"flex",justifyContent:"space-around",position:"absolute",bottom:"0",width:"100%"}}>
<p className={styles.para} style={{borderBottom:" 4px solid rgba(250, 74, 12, 1)"}}>Login</p>
<p  className={styles.para}>Sign-up</p>
    </div>
</div>
<div style={{padding:"50px",marginTop:"10%"}}>
    <form>
        <div>
        <label style={{fontSize:"20px"}}>Email address</label><br></br>
        <input type='text' placeholder='Dosamarvis@gmail.com' className={styles.input}></input><br></br>
        </div>
        <hr></hr>
      <div style={{marginTop:"7%"}}>
      <label style={{fontSize:"20px"}}>Password </label><br></br>
      <input type='password' placeholder='********' className={styles.input}></input><br></br>
      </div>
      <hr></hr>
    </form>
    <p style={{color:"rgba(250, 74, 12, 1)",fontWeight:"500",fontSize:"24px"}}>Forgot passcode?</p>
   
   
</div>
<div style={{ position: "absolute", width: "100%", bottom: "0",padding:"50px",boxSizing:"border-box" }}>
                        <button style={{
                            color: "rgba(246, 246, 249, 1)",
                            backgroundColor: "rgba(250, 74, 12, 1)",
                            borderRadius: "20px",
                            padding: "20px",
                            width:"100%",
                            border: "none",
                            boxSizing:"border-box"
                        }}>Login</button>
                    </div>
            </div>

        </div>
        </>
    )
}