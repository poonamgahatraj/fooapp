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
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"13%"}}>
<p className={styles.para}>Login</p>
<p  className={styles.para}>Sign-up</p>
    </div>
</div>
<div style={{padding:"35px",position:"relative"}}>
    <form>
        <div>
        <label>Email address</label><br></br>
        <input type='text' placeholder='Dosamarvis@gmail.com' className={styles.input}></input><br></br>
        </div>
      <div style={{marginTop:"7%"}}>
      <label >Password </label><br></br>
      <input type='password' placeholder='********' className={styles.input}></input><br></br>
      </div>
       
    </form>
    <p style={{color:"rgba(250, 74, 12, 1)",fontWeight:"500"}}>Forgot passcode?</p>
   
   
</div>
<div style={{ position: "absolute", width: "100%", bottom: "0px", padding: "0 20px" }}>
                        <button style={{
                            color: "rgba(246, 246, 249, 1)",
                            backgroundColor: "rgba(250, 74, 12, 1)",
                            borderRadius: "20px",
                            padding: "15px",
                            width: "100%",
                            border: "none",
                            boxSizing:"border-box"
                        }}>Login</button>
                    </div>
            </div>

        </div>
        </>
    )
}