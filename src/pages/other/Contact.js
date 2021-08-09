import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";

const Contact = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Kadirbey | İletişim</title>
        <meta
          name="description"
          content="Kadirbey - İletişim"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Anasayfa</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        İLETİŞİM
      </BreadcrumbsItem>
      <LayoutOne 
       headerContainerClass="container-fluid"
       headerPaddingClass="header-padding-1">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.30032586032578!2d32.81293367358116!3d39.9009931846031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34ff95271f86f%3A0x76938994eee30ad8!2sKadirbey%20Otomotiv!5e0!3m2!1str!2str!4v1628257851359!5m2!1str!2str" width={1170} height={550} style={{border: 0}} allowFullScreen loading="lazy" />
            </div>
            <div  className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div style={{minHeight:"675px"}} className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+9(312) 219-05-05</p>
                  
                    </div>
                    
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-fax" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+90(312) 219-05-06</p>
                  
                    </div>
                    
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:urname@email.com">info@kadirbey.com.tr</a>
                      </p>
                     
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p style={{lineHeight:"20px"}}>Kızılırmak Mh. 1450. Sk. No:16/67 Çukurambar Çankaya/Ankara</p>
                      
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Sosyal Medya</h3>
                    <ul>
                      <li>
                        <a target="blank" href="https://www.facebook.com/Kadirbey-Otomotiv-102256168622482">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a target="blank"  href="https://www.instagram.com/kadirbeyoto">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a target="blank"  href="https://www.linkedin.com/company/kadirbeyotomotiv">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div style={{minHeight:"675px"}} className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>İletişim Formu</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Adınız Soyadınız*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Konu*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Mesajınız*"
                          defaultValue={""}
                        />
                        <button style={{backgroundColor:"transparent", border:"1px solid black", color:"black"}} className="submit" type="submit">
                          GÖNDER
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
