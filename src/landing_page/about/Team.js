import React from "react";
function Team() {
  return (
    <div className="container p-5">
      <div className="row mb-5 p-5">
        <h1 className=" mt-4" style={{textAlign:"center",color:"#444444"}}>People</h1>
        <div className="col-6 p-5" style={{textAlign:"center"}}>
            <img   className="p-5"   src="Media\image\nithinKamath.jpg" style={{borderRadius:"50%",width:"90%"}} alt="people img" />
           <div> <h1 className="fs-5" >Nithin Kamath</h1>
          <p className="text-muted">Founder, CEO</p>
           </div>
        </div>
        <div className="col-6 mt-5 p-5">
            <p className="mt-4">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p className="mt-2">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p className="mt-2">Playing basketball is his zen.</p>
            <p className="mt-2">Connect on <a href="" style={{textDecoration:"none"}}>Homepage </a>/ <a href="" style={{textDecoration:"none"}}>TradingQnA </a>/<a href="" style={{textDecoration:"none"}}>Twitter</a></p>

        </div>
      </div>
    </div>
  );
}

export default Team;
