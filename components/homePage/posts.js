import {Fragment} from "react"
import { BsSuitHeart,BsFillPersonFill,BsLockFill } from "react-icons/bs";

function Listing(){
    return (
        <Fragment>
            <div className="listing-card-container">
                <div className="listing-card-body">
                    <div className="card-body-top">
                        <div className="card-top-left">
                            <div className="card-top-left-people">
                                <BsFillPersonFill/>
                                <span>4.0</span>
                            </div>
                            <div className="card-top-left-lock">
                                <BsLockFill/>
                                <span>2.0</span>
                            </div>
                        </div>
                        <button className="heart-btn"><BsSuitHeart color="white" size="4vmin"/></button>
                    </div>
                    <div className="card-body-bottom">
                        $ 100/Day
                    </div>
                    <img src="https://r1imghtlak.mmtcdn.com/95726fc871f811eaa5ab0242ac110007.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg&downsize=821:550&crop=821:550" alt="" />
                </div>
                <div className="listing-card-info">
                    <div className="card-info-title">Well Furnished Apartment</div>
                    <div className="card-info-poster-duration">
                        <div className="card-info-poster">Tessa Paulson</div>
                        <div className="card-info-duration">4 Aug - 7 Aug</div>
                    </div>
                    <div className="card-info-location">100 Smart Street, LA, USA</div>
                </div>
            </div>
        </Fragment>
    )
}

export default Listing