import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTopbar = (props) => {
    return (
      <div className={`topbar ${props.topbarClass}`}>
        <h2 className="hidden">some</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-lg-7 col-md-12 col-12">
              <div className="contact-intro">
                <ul>
                  <li>
                    <i className="fi flaticon-phone-call"></i> (+91) 8815532159
                  </li>
                  <li>
                    <i className="fi flaticon-email"></i>
                    customerservice@centuryfinancelimited.com
                  </li>
                  {/* <li>
                    <i className="fi flaticon-maps-and-flags"></i>Iconic
                    Corenthum, 5th floor, Tower C, Block A, Industrial Areas
                    Sector 62, Noida, Uttar Pradesh, 201301
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col col-lg-5 col-md-12 col-12">
              <div className="contact-info">
                <ul>
                  <li>
                    <Link to="/">
                      <i className="fi flaticon-facebook-app-symbol"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fi flaticon-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fi flaticon-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fi flaticon-instagram-1"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fi flaticon-pinterest"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fi flaticon-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HeaderTopbar;