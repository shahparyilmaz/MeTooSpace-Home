import {FaUser} from "react-icons/fa"
import {BsBookmark} from "react-icons/bs"

function Section2Card(props){
    return (
        <div className="section-2-card-body">
            <div className="s2-card-top">
                <div className="s2-top-left">
                    <div className="s2-top-left-img">
                        <img src={props.posterImg} alt="" />
                    </div>
                    <div className="s2-top-left-details">
                        <div className="s2-top-left-poster">
                            {props.posterName}
                        </div>
                        <div className="s2-top-left-date">
                            {props.postDate}
                        </div>
                    </div>
                </div>
                <div className="s2-top-right">
                    <FaUser/>
                    <span>2.0</span>
                </div>
            </div>
            <div className="s2-card-middle">
                <img src={props.imgUrl} alt="" />
                <div className="s2-card-middle-gender">Male</div>
                <div className="s2-card-middle-btn">
                    <div className="s2-card-middle-btn-1"></div>
                    <div className="s2-card-middle-btn-2"></div>
                    <div className="s2-card-middle-btn-3"></div>
                </div>
            </div>
            <div className="s2-card-bottom">
                <div className="s2-bottom-row1">
                    <div className="s2-row1-date">
                        {props.fromDate} - {props.toDate}
                    </div>
                    <div className="s2-row1-save">
                        <BsBookmark/>
                    </div>
                </div>
                <div className="s2-bottom-row2">
                    {props.title}
                </div>
                <div className="s2-bottom-row3">
                    <span className="s2-row3-price">${props.price}</span>
                    <span className="s2-row3-day"> / Day</span>
                </div>
            </div>
        </div>
    )
}

export default Section2Card