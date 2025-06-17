import React from 'react';
function RightSecetion({
       imageUrl,
    productName,
    productDesription,
    learnMore,
    kiteConnect,
    tryDemo,







}) {
    return ( 
      <div className='container-fluid mt-5 '>
        <div className='row'>
  <div className='col-1'></div>
            <div className='col-md-4 p-5  mt-5'>
                <h2 className='mt-5'>{productName}</h2>
                <p className='mt-4' style={{fontSize:"16px"}}>{productDesription}</p>
                {(tryDemo||learnMore||kiteConnect)&&(
                 <div>
                  {learnMore &&(
                   <a href={learnMore} style={{textDecoration:"none"}} className='me-5' >{learnMore}<i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>)}
                   {kiteConnect && (
                     <a href={kiteConnect} style={{textDecoration:"none"}} className='me-5' >{kiteConnect}<i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                   )}
                 </div>
                )}
            </div>

          <div className='col-6 d-flex justify-content-center align-items-start p-0'>
  <img 
    src={imageUrl} 
    alt="Product" 
    style={{ width: "100%", maxWidth: "800px", height: "auto", display: "block"  }} 
  />
</div>

          
          
       <div className='col-1'></div>    
         

        </div>
       </div>
     );
}

export default RightSecetion;