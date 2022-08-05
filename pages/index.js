import NavBar from "../components/common/navbar"
import Footer from "../components/common/footer"

import Section1Card from "../components/homePage/cards/section1card"
import section1Listings from "../data/home/section1"
import Section2Card from "../components/homePage/cards/section2card"
import Section2Listings from "../data/home/section2"
import Section3Card from "../components/homePage/cards/section3card"
import Section3Listings from "../data/home/section3"

import {MdSmartphone} from "react-icons/md"
import {BsPeopleFill,BsPlayFill,BsApple} from "react-icons/bs"
import {RiGooglePlayFill} from "react-icons/ri"
import {RiPlantFill} from "react-icons/ri"
import HomePagePhone from "../images/homepage1.png"

import Image from "next/image"

function Home(){
    return (
        <div>
            <NavBar/>
            <div className="home-container">
                <div className="home-body">
                    <div className="home-section-body">
                        <div className="section-heading">
                            <div className="section-heading-title">
                                Fit in your choice
                            </div>
                        </div>
                        <div className="section-content">
                            {section1Listings.map((listing)=>
                                <Section1Card
                                    imgurl={listing.imgurl}
                                    title={listing.title}
                                    poster={listing.poster}
                                    fromDate={listing.fromDate}
                                    toDate={listing.toDate}
                                    price={listing.price}
                                />
                            )}
                        </div>
                    </div>

                    <div className="home-section-body">
                        <div className="section-heading">
                            <div className="section-heading-title">
                                Traveller in Miami
                            </div>
                            <div className="section-heading-more">
                                56 more
                            </div>
                        </div>
                        <div className="section-content">
                            {Section2Listings.map((listing)=>
                                <Section2Card
                                    posterName={listing.posterName}
                                    posterImg={listing.posterImg}
                                    postDate={listing.postDate}
                                    fromDate={listing.fromDate}
                                    toDate={listing.toDate}
                                    imgUrl={listing.imgUrl}
                                    title={listing.title}
                                    price={listing.price}
                                />
                            )}
                        </div>
                    </div>

                    <div className="home-section-body">
                        <div className="section-heading">
                            <div className="section-heading-title">
                                Travel to Miami
                            </div>
                            <div className="section-heading-more">
                                56 more
                            </div>
                        </div>
                        <div className="section-content">
                            {Section3Listings.map((listing)=>
                                <Section3Card
                                    posterName={listing.posterName}
                                    posterImg={listing.posterImg}
                                    postDate={listing.postDate}
                                    fromDate={listing.fromDate}
                                    toDate={listing.toDate}
                                    imgUrl={listing.imgUrl}
                                    title={listing.title}
                                    price={listing.price}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className="home-banner">
                    <div className="home-banner-left">
                        <div className="banner-left-description">
                            How wasy to find the perfect travel partner and reduce travel expenses?
                        </div>
                        <div className="banner-left-title">
                            You Are Just 3 Steps Away
                        </div>
                        <div className="banner-left-watchvideo">
                            <span className="banner-left-watchvideo-logo">
                                <BsPlayFill/>
                            </span>
                            <span className="banner-left-watchvideo-msg">Watch Video</span>
                        </div>
                    </div>
                    <div className="home-banner-right">
                        <div className="banner-right-section">
                            <div className="banner-right-img">
                                <MdSmartphone/>
                                {/* <img src="https://www.svgrepo.com/show/131481/mobile-phone.svg" alt="" /> */}
                            </div>
                            <div className="banner-right-title">
                                Create Post
                            </div>
                            <div className="banner-right-description">
                                for sharing place or search places and travellers
                            </div>
                        </div>
                        <div className="banner-right-section">
                            <div className="banner-right-img">
                                <BsPeopleFill/>
                            </div>
                            <div className="banner-right-title">
                                Find perfect partner
                            </div>
                            <div className="banner-right-description">
                                for sharing place or search places and travellers
                            </div>                        </div>
                        <div className="banner-right-section">
                            <div className="banner-right-img">
                                <RiPlantFill/>
                            </div>
                            <div className="banner-right-title">
                                Save your money
                            </div>
                            <div className="banner-right-description">
                                for sharing place or search places and travellers
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-app">
                    <div className="home-app-left">
                        {/* <Image src={HomePagePhone} alt="/" objectFit="cover"/> */}
                    </div>
                    <div className="home-app-right">
                        <div className="app-right-title">
                            Download totel app for the best experience
                        </div>
                        <div className="app-right-description">
                            Available for free on these platforms
                        </div>
                        <div className="app-right-buttons">
                            <button className="app-buttons-btn apple">
                                <div className="app-right-btn-logo">
                                    <BsApple/>
                                </div>
                                <div className="app-right-btn-text">
                                    <div className="app-btn-text-line1">
                                        Download on the
                                    </div>
                                    <div className="app-btn-text-lin2">
                                        App Store
                                    </div>
                                </div>
                            </button>

                            <button className="app-buttons-btn google">
                                <div className="app-right-btn-logo">
                                    <RiGooglePlayFill/>
                                </div>
                                <div className="app-right-btn-text">
                                    <div className="app-btn-text-line1">
                                        Get it on
                                    </div>
                                    <div className="app-btn-text-lin2">
                                        Google Play
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <Footer/>

            </div>
        </div>
    )
}

export default Home
