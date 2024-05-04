import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Welcome to Zee Care, where exceptional healthcare meets compassionate service.
            Our medical center has been a cornerstone of Colombo for last 5 years,
            providing comprehensive medical care to our community and beyond.
          </p>
          <p>We are all in 2024!</p>
          <p>At Zee Care, we offer a wide range of medical services, including:</p>
          <p>
            Primary Care: Our primary care physicians are your first point of contact for all your healthcare needs, from routine check-ups to managing chronic conditions.<br></br>
            Specialized Care: We have specialists in various fields, including cardiology, orthopedics, neurology, oncology, and more, to provide advanced treatments tailored to your specific health needs.<br></br>
            Diagnostic Services: Our state-of-the-art diagnostic imaging and laboratory facilities enable us to accurately diagnose and monitor medical conditions.<br></br>
            Emergency Care: Our emergency department is staffed 24/7 with experienced healthcare professionals ready to provide prompt and effective care in urgent situations.<br></br>
            Wellness Programs: We offer wellness programs and preventive care services to help you maintain a healthy lifestyle and prevent illness.<br></br>
          </p>
          <p>As a trusted healthcare provider in Colombo, Sri Lanka, we are honored to serve you and your family.
            Your health and well-being are our top priorities, and we look forward to partnering with you on your healthcare journey.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
