

export default function Home (){
    return(
        <>
        <div className="Container" style={{height:"100vh"}}>
        <div style={{ width:"100vw",border:"1px solid ", height:"600px",backgroundImage:"url('./hero.png')",backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",position:"relative"}}>
<div style={{textAlign:"center",marginTop:"5%"}}>
    <p style={{fontWeight:"500",color:"white",fontSize:"18px"}}>Food app</p>
    
    <h1 style={{color:"white",fontSize:'50px',marginBottom:"0px",fontStyle:"normal"}}>Why stay hungry when </h1>
  <h1 style={{color:"white",fontSize:'50px',marginTop:"0px"}}>  you can order form Bella Onojie</h1>
    
    
    <p style={{color:"white",fontStretch:"extra-expanded",fontStyle:'normal'}}>Download the bella onoje’s food app now on</p>
</div>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",marginTop:"3%"}}>
    <button style={{backgroundColor:"#FA4A0C",color:"white",padding:"15px",borderRadius:"20px",border:"none",width:"10%",fontWeight:"bold",fontSize:"16px"}}>Playstore</button>
    <button style={{color:"white",padding:"12px",borderRadius:"20px",border:"0.2px solid",width:"10%",background:"none",fontWeight:"bold",fontSize:"16px"}}>App store</button>

</div>

<div style={{display:"flex",justifyContent:"center"}}>
<img src="./image1.png" style={{height:"730px",width:"500px",position:"absolute",top:"60%",left:"30%"}}></img>
<img src="./image2.png"  style={{height:"530px",width:"250px",position:"absolute",left:"46%",top:"90%"}}></img>
<hr></hr>
</div>


        </div>

        
        
        </div>
       <hr style={{marginTop:"15%"}}></hr>
       <div style={{textAlign:"center"}}>
        <h1> How the app works</h1>
       </div>

       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20%"}}>
<div>
    <img src="./image3.png" style={{boxShadow:"rgba(46, 4, 4, 0.15)"}}></img>
</div>
<div>
    <p style={{color:"#FA4A0C",fontWeight:"700",fontSize:"20px",letterSpacing:"0.1"}}>Create an account</p>
    <p style={{fontWeight:"700",fontSize:"35px",width:"450px"}}>Create/login to an existing
    account to get started</p>
    <p style={{color:"#737373",width:"400px",fontSize:"23px",letterSpacing:"0.2px"}}>An account is created with your email
    and a desired password</p>
</div>
       </div>

       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20%"}}>

<div>
    <p style={{color:"#FA4A0C",fontWeight:"700",fontSize:"20px",letterSpacing:"0.1"}}>Explore varieties</p>
    <p style={{fontWeight:"700",fontSize:"35px",width:"450px"}}>Shop for your favorites
    meal as e dey hot.</p>
    <p style={{color:"#737373",width:"400px",fontSize:"23px",letterSpacing:"0.2px"}}>Shop for your favorite meals or drinks
    and enjoy while doing it.</p>
</div>

<div>
    <img src="./image4.png" style={{boxShadow:"rgba(46, 4, 4, 0.15)"}}></img>
</div>
       </div>

       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20%"}}>
<div>
    <img src="./image5.png" style={{boxShadow:"rgba(46, 4, 4, 0.15)"}}></img>
</div>
<div>
    <p style={{color:"#FA4A0C",fontWeight:"700",fontSize:"20px",letterSpacing:"0.1"}}>Checkout</p>
    <p style={{fontWeight:"700",fontSize:"35px",width:"450px"}}>When you done check out
    and get it delivered.</p>
    <p style={{color:"#737373",width:"400px",fontSize:"23px",letterSpacing:"0.2px"}}>When you done check out and get it 
    delivered with ease.</p>
</div>
       </div>
       <div style={{ width:"100vw",border:"1px solid ", height:"600px",backgroundImage:"url('./hero2.png')",backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",position:"relative"}}>
<div style={{textAlign:"center",marginTop:"12%"}}>
   
    
    <h1 style={{color:"white",marginBottom:"0px",fontStyle:"normal"}}>Download the app now.</h1>
  
    
    <p style={{color:"white",fontStretch:"extra-expanded",fontStyle:'normal'}}>Available on your favorite store. Start your premium experience now</p>
</div>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",marginTop:"3%"}}>
    <button style={{backgroundColor:"#FA4A0C",color:"white",padding:"15px",borderRadius:"20px",border:"none",width:"10%",fontWeight:"bold",fontSize:"16px"}}>Playstore</button>
    <button style={{color:"white",padding:"12px",borderRadius:"20px",border:"0.2px solid",width:"10%",background:"none",fontWeight:"bold",fontSize:"16px"}}>App store</button>

</div>
</div>

<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 60px"}}> 
            <div> <img src="./logo.png" style={{height:"60px"}}></img></div>
            <div style={{display:"flex",gap:"20px"}}>
               <img src="./twitter.png" style={{height:"20px"}}></img>
               <img src="./facebook.png" style={{height:"20px"}}></img>
               <img src="./instagram.png" style={{height:"20px"}}></img>
            </div>
            <div>
                <p style={{fontSize:"12px"}}>Copywright 2020 Bella Onojie.com</p>
            </div>
        </div>


        </>
    )
}