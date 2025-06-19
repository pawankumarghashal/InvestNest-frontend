import React from 'react';
import Hero from './Hero';
import LeftSecetion from './LeftSecetion';
import RightSecetion from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return (  

 <>
 
 <Hero/>
 <LeftSecetion
 imageUrl="Media\image\kite.png"
 productName="Falcon"
 productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an   elegant UI, and more. Enjoy the Falcon experience seamlessly on your Android and iOS devices."
 tryDemo="Try demo"
 learnMore="Learn more"
 googlePly=""
 appStore=""
 

 />
 <RightSecetion
  imageUrl="Media\image\console.png"
 productName="Console"
 productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
 tryDemo=""
 learnMore="learn More"




 />
 <LeftSecetion
 imageUrl="Media\image\coin.png"
 productName="Coin"
 productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
 tryDemo=""
 learnMore=""
 coin="#"
 googlePly=""
 appStore=""
 
 />
<RightSecetion
  imageUrl="Media\image\kiteconnect.png"
 productName="Falcon Connect API"
 productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
 kiteConnect="Falcon Connect"
 tryDemo=""
 learnMore=""



 />





 <LeftSecetion
 imageUrl="Media\image\varsity.png"
 productName="Varsity mobile"
 productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
 googlePly=""
 appStore=""
 
 />
 
 <Universe/>

 
 
 
 
 </>





    );
}

export default ProductPage;