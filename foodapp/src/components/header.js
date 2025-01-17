import styles from './header.module.css'
import Home from './home'

export default function Header (){
    return(
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px"}}> 
            <div> <img src="./logo.png" style={{height:"60px"}}></img></div>
            <div className={styles.header}>
                <p className={styles.para}>Home</p>
                <p className={styles.para}>Product</p>
                <p className={styles.para}>Faq</p>
                <p className={styles.para}>Contact</p>
            </div>
        </div>
        <Home/>
        </>
    )
      
    
}