import React from 'react';
import '../styles/about.css';
import SeattleImage from '../media/Seattle98.png';  // Assuming the image is in the 'src/media/' folder

function about() {
  return (
    <div className="introduction-div">
      <img src={SeattleImage} alt="logo" />
      <div className="introduction-text">
        <h1>Welcome to Seattle 98 News</h1>
        <p> In a world where information moves faster than ever, staying updated with the latest news is more important than ever. 
            Our platform offers a comprehensive and reliable source of news for those who want to keep their finger on the pulse of Seattle and Washington State. 
            We cover a wide array of topics, from the vibrant world of arts and entertainment to the cutting-edge developments in business, science, and technology.
             Whether you're interested in the latest breakthroughs in AI, updates on lifestyle trends, or global news impacting the region, we’ve got you covered. <br /><br />
              As we move further into the digital age, the way we consume news is evolving. The days of relying solely on traditional newspapers are becoming a thing of the past.
               Our website was created with this in mind – developed right here in Seattle in 2098 by developer Nguyen Giang, 
               our mission is to provide a platform that not only keeps you informed but also engages and connects you with the most relevant stories of today and tomorrow. <br /><br /> 
               Our goal is to make sure you never miss out on the important stories that shape your world. With fast, reliable, and up-to-date posts delivered straight to your screen, 
               we are your go-to source for everything you need to know.Embrace the future of news consumption – join us in discovering what’s happening around you in the AI-powered age where knowledge has no boundaries. </p>
      </div>
    </div>
  );
}

export default about;
