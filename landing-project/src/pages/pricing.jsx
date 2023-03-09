import React from "react";

const Pricing = () => {
  return (
    <>
      <div className="prices--div">
        <div className="single--price">
          <h2 className="tier-heading">Single Tier</h2>
          <p>In the single tier you get:</p>
          <ul>
            <li>A paid access to every cartoon in our API</li>
            <li>No limit to amount of calls you can make</li>
            <li>Access to our sketch artwork anywhere</li>
            <li>
              Create custom artwork and even add custom watermarks and signature
            </li>

            <li>Access to Toonie's assistance in sketching</li>
          </ul>
          <h3>$18/year</h3>
          <button className="sub--btn">Subscribe</button>
        </div>
        <div className="group--price">
          <h2 className="tier-heading">Group Tier</h2>
          <p>In the Group tier you get:</p>
          <ul>
            <li>A paid access to every cartoon in our API</li>
            <li>No limit to amount of calls you can make</li>
            <li>Access to our sketch artwork anywhere</li>
            <li>
               Add custom watermarks and signature to your custom sketches
            </li>
            <li>
              Access to sharing, this means you can share this subscription to
              friends and family
            </li>
            <li>High access to Toonie's assistance in sketching</li>
          </ul>
          <h3>$30/year</h3>
          <button className="sub--btn">Subscribe</button>
        </div>
        <div className="free--price">
          <h2 className="tier-heading">Free Tier</h2>
          <p>In the Free tier you get:</p>
          <ul>
            <li>A limited access to utility cartoons in our API</li>
            <li>Limit to amount API calls</li>
            <li>Access to our sketch artwork anywhere</li>
            <li>
              Create custom artwork
            </li>
          </ul>
          <h3>$0/year</h3>
          <button className="sub--btn">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Pricing;
