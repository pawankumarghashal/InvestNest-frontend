import React from 'react';

function Footer() {
    return (
        <footer className='border-top mt-5' style={{backgroundColor:"rgb(250,250,250)"}}>
       <div className="container mb-3 mt-4">
        <div className="row">
            <div className='col'><img
          src="Media\image\download.svg"
          alt="logo"
          style={{ width: "50%" }}
        />
        <p className='mt-2'>© 2010 - 2025, InvestNest Broking Ltd.

All rights reserved.</p>
        </div>
            <div className='col mb-3'>
                <p className='mb-3 fw-semibold'>Company</p>
                <a href=''  className='hover-link d-block mb-1'>About</a> 
                <a href='' className='hover-link d-block mb-1' >Products</a> 
                <a href='' className='hover-link d-block mb-1'>Pricing</a> 
                <a href='' className='hover-link d-block mb-1' >Referral programme</a> 
                <a href='' className='hover-link d-block mb-1'>Careers</a> 
                <a href='' className='hover-link d-block mb-1'>Zerodha.tech</a> 
                <a href='' className='hover-link d-block mb-1'>Open source</a> 
                <a href='' className='hover-link d-block mb-1 '>Press & media</a> 
                <a href='' className='hover-link d-block mb-1'>Zerodha Cares (CSR) </a> 
                </div>
           
            <div className='col mb-3'>
                <p className='mb-3 fw-semibold'>Support</p>
                <a href=''  className='hover-link d-block mb-1'>Contact us</a> 
                <a href='' className='hover-link d-block mb-1'>Support portal</a> 
                <a href='' className='hover-link d-block mb-1'>I-Connect blog</a> 
                <a href='' className='hover-link d-block mb-1'>List of charges</a> 
                <a href='' className='hover-link d-block mb-1'>Downloads & resourcs</a> 
                <a href='' className='hover-link d-block mb-1'>Videos</a> 
                <a href='' className='hover-link d-block mb-1'>Market overview</a> 
                <a href='' className='hover-link d-block mb-1'>How to file a complaint?</a> 
                <a href='' className='hover-link d-block mb-1'>Status of your complaints </a> 
            </div>
            <div className='col mb-3'>
                <p className='mb-3 fw-semibold'>Account</p>
                <a href=''  className='hover-link d-block mb-1'>Open an account</a>
                <a href='' className='hover-link d-block mb-1'>Fund transfer</a>
            </div>
        </div>
       
        <div className='container mt-5 p-2 text-muted ' style={{fontSize:"12px"}} >
            <p className='mt-3'>
            InvestNest Broking Ltd.: Member of XYZ, XYZ &​ XYZ – XXXX Registration no.: XXXXXXXXXX XXXX/XXXX: Depository services through InvestNestBroking Ltd. – XXXX Registration no.: XX-XX-123-2019 Commodity Trading through InvestNest Commodities Pvt. Ltd. MCX: XXXX; XXX-00000 – SEBI Registration no.: XXXXXXXXXX Registered Address: InvestNest Broking Ltd., #XXX/XXX, 4th Cross, XXXXX Colony, Opp. XXXXX Public XXXX, X.Y Nagar 4th Phase, Bengaluru - 123456, Karnataka, India. For any complaints pertaining to securities broking please write to <a href=''className='text-decoration-none'>complaints@InvestNest.com</a>, for DP related to <a href='' className='text-decoration-none'>dp@InvestNest.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF </p>
<p>
Procedure to file a complaint on XXXX SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

<a href='' className='text-decoration-none'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>

<p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>.
<p>
Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by XXXX/XXXX every month.</p>

<p>
"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of InvestNest and offering such services, please <a href='' className='text-decoration-none' >create a ticket here</a>.
            </p>
        </div>
       </div>
       <img   src="Media\image\download.svg"   
          alt="logo"
          style={{ width: "10%" }}   className="d-block mx-auto mb-4"
        />
       </footer>
      );
}

export default Footer;