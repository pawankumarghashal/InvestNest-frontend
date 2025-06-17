import React from 'react';
function Hero() {
    return (
        <div className='
        container'>
          <div className='row'>
            <div className='
            text-center' style={{marginTop:"100px"}}>
                <h1>Pricing</h1>
                <p className='mt-3'>Free equity investments and flat 20₹ traday and F&O trades</p>
           </div>
           <div className='row text-center' style={{marginTop:"200px"}}>
           <div className='col-4'>
            <img src='Media\image\pricing0.svg' alt='image'  style={{width:"100%",maxWidth:"250px"}}/>
            <h3>Free equity delivery</h3>
            <p className='mt-4 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
           </div>
           <div className='col-4'>
             <img src='Media\image\intradayTrades.svg' alt='image' style={{width:"100%",maxWidth:"250px"}}/>
             <h3>Intraday and F&O trades</h3>
             <p className='mt-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
           </div>
           <div className='col-4'>
              <img src='Media\image\pricingEquity.svg' alt='image' style={{width:"100%",maxWidth:"250px"}}/>
              <h3>Free direct MF</h3>
              <p className='mt-2 text-muted p-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
           </div>
         </div>
          </div>
        </div>
      );
}

export default Hero;