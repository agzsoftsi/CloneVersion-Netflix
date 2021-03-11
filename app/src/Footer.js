import React from 'react';
import './Footer.css';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Footer() {
    return (
        <div className="footer"> 
            <div className="footer_phone"> Questions? Call 01 800 917 1563 </div>
            <div className="footer_info">
                <div className="block">
                    <ul>
                        <li>FAQ</li>
                        <li>Investor</li>
                        <li>Ways to Watch</li>
                        <li>Information</li>
                        <li>Netflix Originals</li>
                    </ul>
                </div>
                <div className="block">
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Terms of Use</li>
                        <li>Speed Test</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="block">
                    <ul>
                        <li>Account</li>
                        <li>Privacy</li>
                        <li>Media Center</li>
                        <li>Legal Notices</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>
            </div>

            <div className="footer_language"> 
                <button><LanguageIcon/> <span>English</span> <ArrowDropDownIcon/></button>
                <p>Netflix USA</p>
            </div>

            <div className="footer_autor">
                <p>2021 Netflixclone No rights reserved © - this is a demo!</p>
                <p>Design and Develop by Karlgarmor</p>
                <p>Privacy · Terms · Sitemap · Company Details</p>
            </div>


        </div>
    )
}

export default Footer