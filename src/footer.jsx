import React from "react";
 // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Testimonials</li>
            <li>Affiliates</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>

        <div className="footer-column">
          <h3>Features</h3>
          <div className="features-columns">
            <ul>
              <li>Client Proofing</li>
              <li>Password Protection</li>
              <li>Image Tagging</li>
              <li>Social Media</li>
              <li>Watermarking</li>
            </ul>
            <ul>
              <li>eCommerce</li>
              <li>Comments</li>
              <li>Animations</li>
              <li>Image Licensing</li>
              <li>AI Images</li>
            </ul>
          </div>
        </div>

        <div className="footer-column">
          <h3>Helpful Links</h3>
          <ul>
            <li>Support</li>
            <li>Documentation</li>
            <li>Plans & Pricing</li>
            <li>WordPress Hosting</li>
            <li>Start a Blog</li>
            <li>Make a Website</li>
            <li>WPBeginner</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2025 Envira Gallery, LLC. Envira Gallery is a trademark
          of Envira Gallery, LLC.
        </p>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FTC Disclosure</a>
          <a href="#">Sitemap</a>
          <a href="#">EnviraGallery Coupon</a>
        </div>
        <div className="verified-logos">
          <img src="/images/paypal-verified.png" alt="PayPal Verified" />
          <img src="/images/wpbeginner-verified.png" alt="WPBeginner Verified" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
