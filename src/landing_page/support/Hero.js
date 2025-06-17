import React from 'react';
function Hero() {
    return (  
  <section className='container-fluid' id='supportHero' >
    <div className='p-5' id='supportWrapper'>
      <h4 style={{marginLeft:"1.4rem"}}>Support Portal</h4>
<a href=''>Track tickets</a>
    </div>
    <div className='row mt-5' style={{marginLeft:"60px"}}>

        <div className='col-6 ' style={{position:"relative",top:"-30px",marginBottom:"10px"}}>
          <h4 style={{ position: "relative", top: "-30px", marginBottom: "10px" }}>Search for an answer or browse help topics to create a ticket
</h4>
<input placeholder='Eg: how i do activate F&O,why is my order getting rejected... ' id='supportInput' ></input><br/>
       <a href=''>Track account opening</a>
       <a href='' className='ms-3 ' style={{lineHeight:"3"}}> Track segment activation</a>
       <a href='' className='ms-3'>Intraday margins </a><br/>
      <a href='' >Kite user manual</a>
       
        </div>
        
           <div className='col-6'  style={{ marginTop: "-20px" }}>
            <h4>Featured</h4>
            <ol>
              <li ><a href=''>Introduction of new F&O contracts on 9 individual <br/>securities</a></li>
              <li><a href=''  style={{lineHeight:"5"}}>Rights Entitlements listing in May 2025</a></li>
            </ol>

           </div>
    </div>

  </section>


    );
}

export default Hero;