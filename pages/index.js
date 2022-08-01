import {Fragment} from "react"
import Listing from "../components/homePage/posts"
import { MdPhoneIphone } from "react-icons/md"
import { IoIosAppstore,IoLogoApple,IoMdAppstore } from "react-icons/io"
import {GrAppleAppStore} from "react-icons/gr"
import {SiAppstore} from "react-icons/si"
import {FaLocationArrow} from "react-icons/fa"



function CreateListings(){
  let roomListings=[]
  for (var i=0;i<6;i++){
    roomListings.push(Listing())
  }
  return roomListings
}

function Home(){

  return (
    <Fragment>
      <div className="home-banner">
        <img className="home-banner-image" src="https://wallpapermemory.com/uploads/515/resort-background-hd-1920x1200-486717.jpg" alt="" />
        <div className="home-navbar-contianer">
          <div className="home-navbar">
            <div className="home-navbar-left">
              <h2>Totel</h2>
            </div>
            <div className="home-navbar-right">
              <span className="home-navbar-right-tabs">Download App</span>
              <span className="home-navbar-right-tabs">Support</span>
              <span className="home-navbar-right-tabs">About</span>
              <span className="home-navbar-right-tabs">Sign In</span>
            </div>
          </div>
        </div>
        <div className="home-banner-middle">
          <div className="banner-middle-title">
            <p>Find The Next Amazing Hotel to Rent</p>
          </div>
          <div className="banner-middle-description">
            <p> We provide best places to rent for a night or even for hours...</p>
          </div>
        </div>
        <div className="home-banner-bottom">
          <div className="home-banner-bottom-inner">
            <span className="home-banner-bottom-tabs">Rooms</span>
            <span className="home-banner-bottom-tabs">Flats</span>
            <span className="home-banner-bottom-tabs">Hostels</span>
            <span className="home-banner-bottom-tabs">Villas</span>
          </div>
        </div>
      </div>
      <div className="home-body-container">
        <div className="home-body-intro">
          <div className="home-body-intro-left">
            <div className="intro-left-title">
              <div className="intro-left-title-1">Share your room</div>
              <div className="intro-left-title-2">Pay fair</div>
            </div>
            <div className="intro-left-para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt unde
               eligendi dicta accusamus. Repudiandae adipisci dolorem et numquam. Sit eos pariatur
                neque odit sunt sint deserunt aspernatur odio molestias, eius praesentium soluta 
                doloribus? Nulla, quidem aliquid ipsam debitis iusto assumenda velit voluptatem?
                 Numquam at porro, pariatur recusandae blanditiis officia?
            </div>
          </div>
          <div className="home-body-intro-right">
            <div className="intro-right-image">
              <img src="https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="home-posts-title">
          <span className="home-posts-title-1">
            Best Posts
          </span>
          <span className="home-posts-title-2">
            of the week
          </span>
        </div>
        <div className="home-posts-body">
          <CreateListings/>
          <div className="home-posts-end-btn">
            <button>Show in map</button>
          </div>
        </div>

        <div className="home-body-intro">
          <div className="home-body-intro-left">
            <div className="home-section-title">
              <span className="home-section-title-1">
                Rent a place even for
              </span>
              <span className="home-section-title-2">
                2 hours
              </span>
              <span className="home-section-title-3">
                or more
              </span>
            </div>
            <div className="intro-left-para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt unde
               eligendi dicta accusamus. Repudiandae adipisci dolorem et numquam. Sit eos pariatur
                neque odit sunt sint deserunt aspernatur odio molestias, eius praesentium soluta 
                doloribus? Nulla, quidem aliquid ipsam debitis iusto assumenda velit voluptatem?
                 Numquam at porro, pariatur recusandae blanditiis officia?
            </div>
          </div>
          <div className="home-body-intro-right">
            <div className="intro-right-image">
              <img src="https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="home-app-container">
          <div className="home-app-left">
            <div className="app-left-title">
              Download Our Mobile App
            </div>
            <div className="app-left-message">
              Available for free on these platforms
            </div>
            <div className="app-left-buttons">
              <button className="btn-playstore">
                <IoMdAppstore size="3vmin"/>
                <span>PlayStore</span>
              </button>
              <button className="btn-applestore">
                <IoIosAppstore size="3vmin"/>
                <span>AppleStore</span>
              </button>
            </div>
          </div>
          <div className="home-app-right">
            <MdPhoneIphone/>
          </div>
        </div>

        <div className="home-section-5-container">
          <div className="section-5-left">
            <div className="section-5-left-half">
              <div className="section-5-title purple-text">13K</div>
              <div className="section-5-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, hic?</div>
              <div className="section-5-title">1650</div>
              <div className="section-5-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, necessitatibus.</div>
            </div>
            <div className="section-5-left-line"></div>
            <div className="section-5-left-half">
              <div className="section-5-title">670</div>
              <div className="section-5-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, hic?</div>
              <div className="section-5-title purple-text">+100</div>
              <div className="section-5-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, necessitatibus.</div>
            </div>
          </div>
          <div className="section-5-right">
            <div className="section-5-right-header">
              <div className="section-5-title">Why</div>
              <div className="section-5-title purple-text"> Totel?</div>
            </div>
            <div className="section-5-right-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ipsum, hic dolor 
              natus nostrum voluptatum consequuntur doloremque sunt alias quia voluptatem, nam
               exercitationem, sapiente illum et dignissimos labore! Cumque reiciendis beatae in,
                iusto at labore error? Corrupti dolorem harum necessitatibus repellat aperiam, 
                itaque ad mollitia aspernatur veritatis! Suscipit, culpa totam!
                
            </div>
          </div>
        </div>

        <div className="home-section-6-container">
          <div className="home-section-6-left">
            <div className="section-6-left-description">
              Sign in now to create a post for sharing room and save cost to enjoy your vacation
            </div>
            <div>
              <button className="section-6-left-button">Sign In</button>  
            </div>
          </div>
          <div className="home-section-6-right">
            <div className="section-6-right-image">
              <img src="https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="home-newsletter-container">
          <div className="home-newsletter-left">
            <div className="newsletter-left-title">
              NEWSLETTER
            </div>
            <div className="newsletter-left-description">
              Stay Upto Date
            </div>
          </div>
          <div className="home-newsletter-right">
            <input className="newsletter-search-field" type="text" placeholder="Your email..."/>
            <button className="newsletter-search-btn"> <FaLocationArrow /> </button>
          </div>
        </div>

        <div className="home-section-8-container">
          <div className="section-8-left">
            <div className="section-8-left-title">
              Totel
            </div>
            <div className="section-8-left-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda magni omnis 
              similique laborum voluptatum
            </div>
            <div className="section-8-left-buttons">
              <button>
                <IoMdAppstore size="3vmin"/>
                <span>PlayStore</span>
              </button>
              <button>
                <IoIosAppstore size="3vmin"/>
                <span>AppleStore</span>
              </button>
            </div>
          </div>
          <div className="section-8-right">
            <div className="section-8-right-part">
              <div className="section-8-right-part-title">
                Help
              </div>
              <div className="section-8-right-part-list">
                <ul>
                  <li>Help center</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Terms and Conditions</li>
                  <li>Advertise with us</li>
                </ul>
              </div>
            </div>
            <div className="section-8-right-part">
              <div className="section-8-right-part-title">
                About Us
              </div>
              <div className="section-8-right-part-list">
                <ul>
                  <li>About</li>
                  <li>Blog</li>
                  <li>How we work</li>
                  <li>Jobs</li>
                </ul>
              </div>
            </div>
            <div className="section-8-right-part">
              <div className="section-8-right-part-title">
                Contact us
              </div>
              <div className="section-8-right-part-list">
                <ul>
                  <li>Phone no:</li>
                  <li>Address:</li>
                  <li>Mail id:</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Home