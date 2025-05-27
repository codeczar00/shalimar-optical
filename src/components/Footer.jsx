import React from 'react'
import './Footer.css'
import { Images } from '../data/images'
import {Link} from 'react-router-dom'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <div className='parent'>
                <div className='footer'>

                    <div className="intro">
                        <div className="footer-logo"><img src={Images.logo} alt="logo" /></div>
                        <p>We are a dedicated optical brand committed to blending style with precision.
                            From everyday essentials to statement frames, our collections reflect quality,
                            craftsmanship and a clear focus on eye health and fashion.</p>
                    </div>

                    <div className="company">
                        <div className="title">COMPANY</div>
                        <ul className='nav-list'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/eyeglasses">Eyeglasses</Link></li>
                            <li><Link to="/sunglasses">Sunglasses</Link></li>
                            <li><Link to="/lenses">Lenses</Link></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>


                    <div id='contact' className="get-touch">
                        <div className="title">GET IN TOUCH</div>
                        <ul className='nav-list'>
                            <li><a href="">Phone</a></li>
                            <li><a href="">Email</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className='copyright'>&copy; {year} Shalimar Optical - All Rights Reserved</p>
        </>
    )
}

export default Footer
