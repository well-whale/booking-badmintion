import React from 'react';
import "../HomePage/HomePage.css";

const Footer = () => {
  return (
      <div>
        <footer class="footer">
        <div class="section__container footer__container">
          <div class="footer__col">
            <h3>BadmintonHub </h3>
            <p>
            BadmintonHub is a badminton court booking website that provides a seamless and convenient way to find and book at the location closest to you
            </p>
            <p>
            With a user-friendly interface and many different court options, BCK hopes to bring a comfortable experience to customers looking for a badminton court.
            </p>
          </div>
          <div class="footer__col">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Our Team</p>
            {/* <p>Blog</p> */}
            <p>Book</p>
            <p>Contact Us</p>
          </div>
          <div class="footer__col">
            <h4>Legal</h4>
            <p>FAQs</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div class="footer__col">
            <h4>Resources</h4>
            <p>Social Media</p>
            <p>Help Center</p>
            <p>Partnerships</p>
          </div>
        </div>
        <div class="footer__bar">
          Copyright © 2023 BadmintonHub. All rights reserved.
        </div>
      </footer>
      </div>
  );
};

export default Footer;
