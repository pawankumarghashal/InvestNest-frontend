import React from 'react';

function Award() {
    return ( 
        < div className='container mt-5 '>
        <div className='row '>
       <div className='col-6 p-5 '>
           <img src='Media\image\largestBroker.svg' alt='award image' />

        </div>
        <div  className='col-6 mt-5 p-5'>

            <h1 className='mt-5 fs-2'>Largest Stock Broker In India</h1>
           <p className='mb-5'>2+ million InvestNest clients contribute to over 15% of all retail order volumes in india by trading and investing in</p>

           <div className='row'>
         <div className='col-6 mt-1'>
           <ul>
            <li>Futures and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
           </ul>
           </div>
           <div className='col-6 mt-1'> 
            
             <li>
                Stocks & IPOs
             </li>
             <li>
              Direct mutual funds
             </li>
             <li>
                Bonds and Govt. Securities
             </li>
           </div>
           </div>
    
         <img className='mt-2'  style={{width:"90%"}} src='Media\image\pressLogos.png' alt='pressLogos' />
        </div>
    </div>
    </div>
     );
}

export default Award;