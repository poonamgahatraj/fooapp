
import styles from './history.module.css'
export default function Search (){
    return(
        <>
          <div className={styles.container}>
        <div style={{display:"flex",alignItems:"center",gap:"30%",fontWeight:"500"}}>
<img src='./left.png' style={{height:"14px"}}></img>
<p>Spicy chieckns</p>
       </div>

       <div style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center",marginTop:"40%"}}>
        <img src='./feather_search.png' style={{height:"100px",width:"100px"}}></img>
        <p style={{fontWeight:"500",fontSize:"35px"}}>Item not found</p>
        <p style={{textAlign:"center",width:"52%"}}>Try searching the item with
        a different keyword.</p>

       </div>
       
        </div>
        </>
    )
}