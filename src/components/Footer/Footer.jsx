import React from "react";
import "./Footer.css";
import facebook from "../../image/facebook-circle.png";
import instagram from "../../image/instagram-circle.png";
import twitter from "../../image/twitter-circle.png";
import { Link } from "react-router-dom";
function Footer() {
  const date = new Date();
  const fullYear = date.getFullYear();

  return (
    <>
      <div id="footer" className="footer-container">
        <div className="top-footer">
          <p>Follow us:</p>
          <div className="social-media">
            <Link className="social-link" to="#">
              <img src={facebook} alt="" />
            </Link>
            <Link className="social-link" to="#">
              <img src={twitter} alt="" />
            </Link>
            <Link className="social-link" to="#">
              <img src={instagram} alt="" />
            </Link>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="col about-store">
            <h2>ກ່ຽວກັບຮ້ານ</h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut tur
            </p>
          </div>
          <div className="col about-product">
            <h2>ສິນຄ້າ</h2>
            <ul>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Cras ornare tristique elit.</li>
              <li>Nunc dignissim risus id metus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
              <li>Lorem ipsum dolor sit amet, consectetuer elit.</li>
            </ul>
          </div>
          <div className="col contact">
            <h2>ຕິດຕໍ່</h2>
            <div className="contact-row">
              <i class="fas fa-home"></i>
              <p>ນາຄຳ, ສີໂຄດຕະບອງ, ນະຄອນ ຫລວງວຽງຈັນ</p>
            </div>
            <div className="contact-row">
              <i class="fas fa-envelope"></i>
              <p>example@gmail.com</p>
            </div>
            <div className="contact-row">
              <i class="fas fa-phone-alt"></i>
              <p>020 55039444</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>All &copy; copy rights are reserved to Ton's SISOUVANH {fullYear}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
