import React,{useState}from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import OpenAccount from '../OpenAccount';
const backendUrl = process.env.REACT_APP_BACKEND_URL;
function Signup() {
      
 const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/send-otp`, { phone });
      if (response.data.success) {
        setOtpSent(true);
        alert("OTP sent successfully!");
      } else {
        alert("Failed to send OTP");
      }
    } catch (error) {
      alert("Error sending OTP");
    }
  };









    return ( 
       <div className='container mt-5 p-5' style={{textAlign:"center"}}>

        <h1 style={{color:"#444"}}>Open a free demat and trading account online</h1>
        <h5 className='mt-4' style={{ color: '#888'}}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h5>
        <div className='row mt-5 '>
            <div className='col-6 mt-5'>
         <img src='Media\image\account_open.svg' alt='Image' />
            </div>
            <div className='col-6 mt-5 p-5' >
                <h2 style={{marginRight:"8rem" ,color:"#444"}} >Signup now</h2>
                <p style={{marginRight:"8rem"}} className='text-muted'>Or track your existing application</p>
                 <form onSubmit={handleSubmit}>
            <PhoneInput
              country={'in'}
              value={phone}
              onChange={setPhone}
              inputProps={{
                name: 'phone',
                required: true,
                placeholder: 'Enter your mobile number',
              }}
              containerStyle={{ marginBottom: '20px',marginLeft:"auto" }}
              inputStyle={{ width: '80%',height: '60px',textAlign: 'left'}}
            />

            <button type="submit" className="btn btn-primary "   style={{ width: "60%", height: "60px", fontSize: "21px",marginRight:"6rem" }}>
              Get OTP
            </button>
          </form>
          <p   className='mt-4 text-muted'    style={{fontSize:"80%"}} >By proceeding, you agree to the Zerodha <a href='' style={{textDecoration:"none"}}>terms </a> & <a href='' style={{textDecoration:"none"}}>privacy policy</a></p>
                  

            </div>
        </div>
        <h2 className='mt-5' style={{color:"#555"}}>Investment options with InvestNest demat account</h2>
        <div className='row p-6' style={{marginTop:"8%"}}>
            <div className='col-6 d-flex p-5'>
                <img src='Media\image\stocks-acop.svg' alt='image'  style={{marginLeft:"2rem"}}/>
                <div>
                <h3 style={{marginRight:"4rem"}}>Stocks</h3>
                 <p className="text-muted mb-0" style={{marginLeft:"3rem"}}>Invest in all exchange-listed</p>
            <p className="text-muted" style={{marginRight:"5rem"}}>securities</p>
                </div>
            </div>
        <div className='col-6 d-flex p-5'>
            <img src='Media\image\mf-acop.svg' alt='image' />
            <div style={{marginLeft:"2rem"}}>
                <h3 style={{marginRight:"4rem"}}>Mutual funds</h3>
                <p className="text-muted mb-0">Invest in commission-free direct</p>
                <p className="text-muted" style={{marginRight:"8rem"}}>mutual funds</p>
            </div>

        </div>
        </div>
         <div className='row p-6' >
            <div className='col-6 d-flex p-5'>
                <img src='Media\image\ipo-acop.svg' alt='image' style={{width:"35%"}} className='mb-5'/>
                <div>
                <h3 style={{marginRight:"9rem"}}>IPO</h3>
                 <p className="text-muted mb-0" style={{marginLeft:"2rem"}}>Apply to the latest IPOs instantly</p>
            <p className="text-muted mt-1" style={{marginRight:"9rem"}}>via UPI</p>
                </div>
            </div>
        <div className='col-6 d-flex p-5'>
            <img src='Media\image\fo-acop.svg' alt='image' style={{width:"28%"}} className='mb-5' />
            <div style={{marginLeft:"2rem"}}>
                <h3 style={{marginRight:"1rem"}}>Futures & options</h3>
                <p className="text-muted mb-0" style={{marginRight:"1rem"}}>Hedge and mitigate market risk</p>
                <p className="text-muted " style={{marginRight:"1rem"}}>through simplified F&O trading</p>
            </div>

        </div>
        </div>
         <button type="submit" className="btn btn-primary me-2 "   style={{ width: "25%", height: "45px", fontSize: "21px",marginRight:"6rem" }}>
             Explore Investments
            </button>
            <div className='row   mt-5 mb-5 ' style={{ backgroundColor: "rgb(250, 250, 250)", padding: "40px 20px",     width: "100%",  minHeight: "500px",          }}
 >
                <h2 className='mt-5'style={{color:"#555"}}>Steps to open a demat account with InvestNest</h2>
                <div className='col-6 mt-5'>
                    <img src='Media\image\steps-acop.svg' alt='image' />

                </div>
                <div className='col-6 text-start text-muted' style={{marginTop:"5rem"}}>
                    <h5> <i class="fa fa-star-o me-3" aria-hidden="true"></i> Enter the requested details</h5>
                    <hr style={{ width: "70%", marginLeft: 0 }}/>
                    <h5><i class="fa fa-star-o me-3" aria-hidden="true"></i>  Complete e-sign & verification</h5>
                       <hr style={{ width: "70%", marginLeft: 0 }}/>
                       <h5> <i class="fa fa-star-o me-3" aria-hidden="true"></i> Start investing!</h5>
                </div>
            </div>
            <div className='row ' style={{marginTop:"10%"}}>
                <div className='col-6 mt-5'>
               <img src='Media\image\acop-benefits.svg' alt='image' style={{width:"70%"}} />
               <h2 style={{color:"#444"}} className='mt-2'>Benefits of opening a Zerodha
               demat account</h2>
                </div>
                
                <div className='col-6'>
                 <h4 style={{color:"#555"}}>Unbeatable pricing</h4>
                 <p className='text-muted mt-4'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                 <br/> 
                 <h4 style={{color:"#555"}}>Best investing experience</h4>
                 <p className='text-muted mt-4'>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                   <br/> 
                   <h4 style={{color:"#555"}}>No spam or gimmicks</h4>
                 <p className='text-muted mt-4'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                   <br/> 

                   <h4 style={{color:"#555"}}>The Zerodha universe</h4>
                 <p className='text-muted mt-4'>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                </div>

            </div>
            <h2 style={{marginTop:"10%",color:"#444"}}>Explore different account types</h2>
            <div className='row mt-5'>
                <div className='col-4'>
                    <div class="card"   className="card hover-card"  style={{width: "20rem",height:"10rem"}}>
  <div class="card-body">
    <h5 class="card-title" className='mt-3' style={{marginRight:"5rem"}}>Individual Account</h5>
    <p class="card-text" className='mt-3' style={{marginLeft:"1rem",textAlign:"left"}}>Invest in equity, mutual funds and derivatives</p>
  </div>
</div>

                </div>
                 <div className='col-4'>
                    <div class="card"   className="card hover-card"  style={{width: "20rem",height:"10rem"}}>
  <div class="card-body">
    <h5 class="card-title" className='mt-3' style={{marginRight:"8rem"}}>HUF Account
</h5>
    <p class="card-text" className='mt-3' style={{marginLeft:"1rem",textAlign:"left"}}>Make tax-efficient investments for your family</p>
  </div>
</div>

                </div>

 <div className='col-4'>
                    <div class="card"   className="card hover-card" style={{width: "20rem",height:"10rem"}}>
  <div class="card-body">
    <h5 class="card-title" className='mt-3' style={{marginRight:"9rem"}}>NRI Account
</h5>
    <p class="card-text" className='mt-3' style={{marginLeft:"1rem",textAlign:"left"}}>Invest in equity, mutual funds, debentures, and more</p>
  </div>
</div>

                </div>
    
            </div>
            <div className='row mt-5'>
                 <div className='col-4'>
                    <div class="card"   className="card hover-card"  style={{width: "20rem",height:"10rem"}} >
  <div class="card-body">
    <h5 class="card-title" className='mt-3' style={{marginRight:"7rem"}}>Minor Account
</h5>
    <p class="card-text"  className='mt-3' style={{marginLeft:"1rem",textAlign:"left"}}>Teach your little ones about money & invest for their future with them</p>
  </div>
</div>

                </div>
                 <div className='col-4'>
                    <div class="card" style={{width: "20rem",height:"10rem" }}   className="card hover-card">
  <div class="card-body">
    <h5 class="card-title"  className='mt-3'>Corporate / LLP/ Partnership


 </h5>
    <p class="card-text"  className='mt-3' style={{marginLeft:"1rem",textAlign:"left"}}>Manage your business surplus and investments easily</p>
  </div>
</div>

                </div>
                <div className='col-4'></div>

            </div>
              <div style={{marginTop:"15%"}}>
        <h2 className='text-center mb-4' style={{ color: '#444' }}>FAQs</h2>
        <Accordion flush defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is a InvestNest account?</Accordion.Header>
            <Accordion.Body>
              A InvestNest account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>What documents are required to open a demat account?</Accordion.Header>
            <Accordion.Body>
              You’ll need PAN, Aadhaar, and a bank proof (cheque or statement).
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Is InvestNest account opening free?</Accordion.Header>
            <Accordion.Body>
              Account opening may involve a nominal fee depending on the segment.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Are there any maintenance charges for a demat account?</Accordion.Header>
            <Accordion.Body>
              Yes, there’s an annual maintenance charge (AMC) for the demat account.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Can I open a demat account without a bank account?</Accordion.Header>
            <Accordion.Body>
              No, a bank account is mandatory for opening and linking with your demat account.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
        <OpenAccount/>



            
       </div>
       
     );
}

export default Signup;