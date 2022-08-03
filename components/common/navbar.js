import {Fragment} from "react"
import {BsCalendarMinus,BsPerson,BsChat,BsBell} from "react-icons/bs"
import {RiBuilding2Line} from "react-icons/ri"
import {BiWallet} from "react-icons/bi"
import {FaRegComment} from "react-icons/fa"

function NavBar(){
    return (
        <Fragment>
            <div className="navbar-body">
                <div className="navbar-left">
                    <div className="navbar-logo">totel</div>
                    <div className="navbar-location">Miami,Florida</div>
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
                        <button className="navbar-createpost">Create Post</button>
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
        </Fragment>
    )
}

export default NavBar