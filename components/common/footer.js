import {AiFillInstagram,AiFillYoutube} from "react-icons/ai"
import {BsTwitter,BsYoutube,BsApple} from "react-icons/bs"
import {FaFacebookF,FaLinkedinIn} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"
import AppStoreBtn from "../../images/appbuttons/AppStore.png"
import GooglePlayBtn from "../../images/appbuttons/GooglePlay.png"
import AppStoreBtn2 from "../../images/appbuttons/AppStore2.png"
import GooglePlayBtn2 from "../../images/appbuttons/GooglePlay2.png"
import GooglePlayBtn3 from "../../images/appbuttons/GooglePlay3.png"

import Image from "next/image"

function Footer(){
    return (
        <div className="footer-outer">
            <div className="footer-body">
                <div className="footer-left">
                    <div className="footer-left-logo">
                        totel
                    </div>
                    <div className="footer-left-text">
                        Social links
                    </div>
                    <div className="footer-left-links">
                        <div className="footer-left-link">
                            <RiInstagramFill/>
                        </div>
                        <div className="footer-left-link">
                            <BsTwitter/>
                        </div>
                        <div className="footer-left-link">
                            <BsYoutube/>
                        </div>
                        <div className="footer-left-link">
                            <FaFacebookF/>
                        </div>
                        <div className="footer-left-link">
                            <FaLinkedinIn/>
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="footer-middle-col">
                        <div className="footer-middle-col-title">
                            About Totel
                        </div>
                        <div className="footer-middle-col-item">
                            Who We Are
                        </div>
                        <div className="footer-middle-col-item">
                            Blog
                        </div>
                        <div className="footer-middle-col-item">
                            Work With Us
                        </div>
                        <div className="footer-middle-col-item">
                            Team
                        </div>
                    </div>
                    <div className="footer-middle-col">
                        <div className="footer-middle-col-title">
                            Learn More
                        </div>
                        <div className="footer-middle-col-item">
                            Privacy
                        </div>
                        <div className="footer-middle-col-item">
                            Security
                        </div>
                        <div className="footer-middle-col-item">
                            Terms
                        </div>
                        <div className="footer-middle-col-item">
                            Sitemap
                        </div>
                    </div>
                    <div className="footer-middle-col">
                        <div className="footer-middle-col-title">
                            Popular Locations
                        </div>
                        <div className="footer-middle-col-item">
                            Miami
                        </div>
                        <div className="footer-middle-col-item">
                            DC
                        </div>
                        <div className="footer-middle-col-item">
                            LA
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-right-btn">
                        {/* <Image src={AppStoreBtn2} alt="/" objectFit="cover" priority/> */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt=""/>
                    </div>
                    <div className="footer-right-btn">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/768px-Google_Play_Store_badge_EN.svg.png?20190913154415" alt="" />
                        {/* <Image src={GooglePlayBtn3} alt="/" objectFit="cover" priority/> */}
                    </div>
                    
                    {/* <div className="footer-right-btn">
                        <div className="footer-right-btn-left">
                            <BsApple/>
                        </div>
                        <div className="footer-right-btn-right">
                            <div className="footer-right-btn-right-lin1">
                                Download on the
                            </div>
                            <div className="footer-right-btn-right-line2">
                                AppStore
                            </div>
                        </div>
                    </div>
                    <div className="footer-right-btn">
                        <div className="footer-right-btn-left">
                            <BsApple/>
                        </div>
                        <div className="footer-right-btn-right">
                            <div className="footer-right-btn-right-lin1">
                                GET IT ON
                            </div>
                            <div className="footer-right-btn-right-line2">
                                GooglePlay
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="footer-additional">
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, 
                Privacy Policy and Content Policies. All trademarks are properties of their 
                respective owners. 2022 © Totel™ Ltd. All rights reserved.
            </div>

        </div>
    )
}

export default Footer