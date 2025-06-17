import { text } from 'figlet';
import React from 'react';

function LeftSecetion({
    imageUrl,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    coin,
    googlePly,
    appStore,
}) {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5 mt-4'>
                <img src={imageUrl} />
            </div>
            <div className='col-1'></div>
            <div className='col-5 p-5 mt-4 '>
                <h2 className='mt-5 '>{productName}</h2>
                <p className='mt-4 '>{productDesription}</p>
               
             {(learnMore||tryDemo||coin) && (
                 <div>
                    {tryDemo && (
                <a href={tryDemo} style={{textDecoration:"none"}} className='me-5' >Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
                {learnMore && (
                 <a href={learnMore} style={{textDecoration:"none"}}> Learn more <i class="fa fa-long-arrow-right " aria-hidden="true"></i></a>)}
                 {coin && (
                     <a href={learnMore} style={{textDecoration:"none"}}>Coin<i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>)}
                 </div>
             )}
                 <div className='mt-4'>
                <a href={googlePly} className='me-3'> <img src='Media\image\googlePlayBadge.svg' /> </a>
                <a href={appStore}> <img src='Media\image\appstoreBadge.svg' /></a>
                 </div>
            </div>

        </div>
       </div>
     );
}

export default LeftSecetion;