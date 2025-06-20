import React from 'react';

function Pricing() {
    return ( 
       <div className='container mt-5 mb-4'>
        <div  className='row'>
          <div className='col-4'>
       <h1 className='mb-3 fs-2  '>Unbeatable pricing</h1>
       <p >  pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
       <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className='col-2'> 

        </div>

        <div className='col-6'>
          <div className='row text-center'>
            <div className='col border p-4'>
              <h1>₹0</h1>
              <p>Free equity delivery and<br/> direct mutual funds</p>
            </div>
            <div className='col border p-4'>
            <h1>₹20</h1>
            <p>intradat and F&0</p>
          </div>
          </div>
        </div>
       </div>
       </div>
     );
}

export default Pricing;
