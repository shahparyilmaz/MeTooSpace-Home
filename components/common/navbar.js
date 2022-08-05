import {Fragment} from "react"
import {BsCalendarMinus,BsPerson,BsChat,BsBell,BsPlusCircle,BsChevronDown} from "react-icons/bs"
import {RiBuilding2Line} from "react-icons/ri"
import {BiWallet} from "react-icons/bi"
import {FaRegComment} from "react-icons/fa"
import {AiOutlinePlusCircle} from "react-icons/ai"
import {TbCurrentLocation} from "react-icons/tb"

function NavBar(){
    return (
        <div>
            <div className="navbar-body">
                <div className="navbar-left">
                    <div className="navbar-logo">totel</div>
                    <div className="navbar-location">
                        <TbCurrentLocation/>
                        <span>Miami,Florida</span>
                        <BsChevronDown/>
                    </div>
                </div>
                <div className="navbar-right">
                    <div>
                        <button className="navbar-tabs">
                            <BsCalendarMinus/>
                            <span>Dates</span>
                        </button>
                    </div>
                    <div>
                        <button className="navbar-tabs">
                            <BsPerson/>
                            <span>Rating 4.0+</span>
                        </button>
                    </div>
                    <div>
                        <button className="navbar-tabs">
                            <RiBuilding2Line/>
                            <span>Booking Status</span>
                        </button>
                    </div>
                    <div>
                        <button className="navbar-tabs">
                            <BiWallet/>
                            <span>Budget</span>
                        </button>
                    </div>
                    <div>
                        <button className="navbar-createpost">
                            <BsPlusCircle/>
                            <span>Post</span>
                        </button>
                    </div>
                    <div className="navbar-options">
                        <BsChat/>
                    </div>
                    <div className="navbar-options">
                        <BsBell/>
                    </div>
                    <div className="navbar-profile">
                        <img src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=740" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar