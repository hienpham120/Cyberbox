import React from 'react'
import { AppleOutlined, AndroidOutlined, FacebookOutlined, TwitterOutlined } from "@ant-design/icons"
import { NavLink } from 'react-router-dom';

export default function Footer() {
    let cinemaSystem = []
    if(localStorage.getItem('CinemaSystem')) {
        cinemaSystem = JSON.parse(localStorage.getItem('CinemaSystem'))
    }

    const renderPartner = () => {
        return cinemaSystem?.map((item, index) => {
            return (
                <NavLink to="#" key={index}> 
                    <img src={item.logo} alt={item.tenHeThongRap} />
                </NavLink>
            )
        })
    }

    return (
        <footer className="footer">
            <div className="footer__wrapper container2">
                <div className="footer__main">
                    <div className="footer__item">
                        <h4>Cyberbox</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <h4>Partner</h4>
                        <div>
                            {renderPartner()}
                            {renderPartner()}
                            
                        </div>
                    </div>
                    <div className="footer__item">
                        <h4>App</h4>
                        <div>
                            <a href="#"><AppleOutlined /></a>
                            <a href="#"><AndroidOutlined /></a>
                        </div>
                    </div>
                    <div className="footer__item">
                        <h4>Social</h4>
                        <div>
                            <a href="#"><FacebookOutlined /></a>
                            <a href="#"><TwitterOutlined /></a>
                        </div>
                    </div>
                </div>
                <div className="footer__sub">
                    <NavLink to="/home"><img src="/images/header/logo.svg" alt="Logo" /></NavLink>
                    <p>C??NG TY TNHH CYBERBOX VIETNAM <br />Gi???y CN??KDN: 03036713425, ????ng k?? l???n ?????u ng??y 5/7/2010, ????ng k?? thay ?????i l???n th??? 5 ng??y 20/10/2017, c???p b???i S??? KH??T th??nh ph??? H??? Ch?? Minh. <br /> ?????a Ch???: T???ng 8, Rivera Park Saigon - S??? 128 Th??nh Th??i, P.14, Q.10,<br /> TPHCM.Hotline: 1900 6017 COPYRIGHT 2017 CYBERBOX. All RIGHTS RESERVED .</p>
                </div>
            </div>
        </footer>
    )
}
