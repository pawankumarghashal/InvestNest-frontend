import React from 'react';
function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 border-top pt-6 ' style={{marginTop:"180px"}}>
                <div className='col-8 '>
                    <a href='' style={{textDecoration:"none"}}> <h5 className='text-center mb-3'>Brokerage calculator</h5></a>
                   
                    <ul className="ms-auto" style={{ width: "fit-content" }}>
                        <li  style={{fontSize:"13px"}}>Call & Trade RMS auto-squareoff:Additional charges of 50 + GST per order.</li>
                        <li style={{ marginTop: "13px",fontSize:"13px" }}>Digital contract notes will be sent via e-mail</li>
                        <li style={{ marginTop: "13px",fontSize:"13px" }}>Physical copies of contract notes, if required,shall be charged 20 per contract note. Courier charges apply.</li>
                        <li style={{ marginTop: "13px" ,fontSize:"13px"}}>For NRI account (non-PIS),0.5% or 100 per executed order for equity(whichever is lower)</li>
                        <li style={{ marginTop: "13px",fontSize:"13px" }}>For NRI account (PIS), 0.5% or 200 per executed order for equity (whichever is lower).</li>
                        <li style={{ marginTop: "13px" ,fontSize:"13px"}}>if the account is in debit balance,any order placed will be charged 40 per executed order instead of </li>
                    </ul>
                </div>
                <div className='col-4'>
                    <a href='' style={{textDecoration:"none"}}> <h5 className='text-center'>List of charges</h5></a>
                </div>

            </div>
        </div>
     );
}

export default Brokerage;