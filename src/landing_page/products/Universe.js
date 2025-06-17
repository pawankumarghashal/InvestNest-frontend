import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center'>
              <h5  className='text-muted'>Want to know more about our technology stack? Check out the <a href='#' style={{textDecoration:"none"}}>InvestNest.tech</a> blog.</h5>
              <div className='mt-5'>     
                <h1 className='mt-5'>The InvestNest Universe</h1>
                <p className='mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
      <div className='row mt-5'>
                    <div className='col-4 p-3' >
                     <img src='Media\image\zerodhaFundhouse.png'  alt='image' style={{ width: "100%", maxWidth: "200px" }} />
                     
                     <p   className='px-5 p-3 text-muted'   style={{fontSize:"12px", marginTop: "0px"}}>Our asset management venture
                        that is creating simple and transparent index
                       funds to help you save for your goals.
                    </p>
                   </div>
                      <div className='col-4 p-3 mt-2'>
                        <img src='Media\image\sensibullLogo.svg'  alt='image' style={{ width: "100%", maxWidth: "200px" }} />
                        <p className='px-5 p-3 text-muted'  style={{fontSize:"12px", marginTop: "0px"}}>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
                      </div>
                        <div className='col-4 p-3'>
                           <img src='Media\image\goldenpiLogo.png'  alt='image' style={{ width: "100%", maxWidth: "200px" }} />
                           <p className='px-5 p-3 text-muted'  style={{fontSize:"12px", marginTop: "0px"}}>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
                        </div>
                            <div className='col-4 p-3' >
                     <img src='Media\image\streakLogo.png'  alt='image' style={{ width: "100%", maxWidth: "200px" }} />
                     <p className='px-5 p-3 text-muted'  style={{fontSize:"12px", marginTop: "0px"}}>Systematic trading platform
that allows you to create and backtest
strategies without coding.

</p>
                   </div>
                      <div className='col-4 p-3 mt-3'>
                        <img src='Media\image\smallcaseLogo.png'  alt='image' style={{ width: "100%", maxWidth: "200px" }} />
                        <p className='px-5 p-3 text-muted'  style={{fontSize:"12px", marginTop: "0px"}}>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
                      </div>
                        <div className='col-4 p-3 mt-3'>
                           <img src='Media\image\dittoLogo.png'  alt='image' style={{ width: "100%", maxWidth: "150px" }} />
                           <p className='px-5 p-3 text-muted'  style={{fontSize:"12px", marginTop: "0px"}}>Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free</p>
                        </div>
              </div>
       <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free{" "}
        </button>
            </div>

        </div>

 
     );
}

export default Universe;