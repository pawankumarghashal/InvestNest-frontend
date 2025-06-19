import React from "react";
function Team() {
  return (
    <div className="container p-5">
      <div className="row mb-5 p-5">
        <h1 className=" mt-4" style={{textAlign:"center",color:"#444444"}}>People</h1>
        <div className="col-6 p-5" style={{textAlign:"center"}}>
            <img   className="p-5"   src="Media\image\pawankumar.png" style={{borderRadius:"50%",width:"100%"}} alt="people img" />
           <div> <h1 className="fs-5" >Pawan Kumar</h1>
          <p className="text-muted">Founder, CEO</p>
           </div>
        </div>
        <div className="col-6 mt-5 p-5">
            <p className="mt-4">Pawan bootstrapped and founded InvestNest in 2025 to simplify and democratize investing for the next generation of Indian investors. Drawing from his journey as a self-taught MERN stack developer and finance enthusiast, he envisioned a platform that makes smart investing accessible to all.</p>
            <p className="mt-2">He actively keeps up with innovations in fintech and believes in empowering retail investors through intuitive tools and real-time insights.</p>
            <p className="mt-2">When not building products, you’ll find him immersed in code or playing cricket to unwind.</p>
            <p className="mt-2">Connect on <a href="" style={{textDecoration:"none"}}>Homepage </a>/ <a href="" style={{textDecoration:"none"}}>TradingQnA </a>/<a href="" style={{textDecoration:"none"}}>Twitter</a></p>

        </div>
      </div>
    </div>
  );
}

export default Team;
