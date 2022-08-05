import {FaUser} from "react-icons/fa"
import {BsBookmark} from "react-icons/bs"
 
function Section2Card(props){
    return (
        <div className="section-3-card-body">
            <div className="s3-card-top">
                <div className="s3-top-left">
                    <div className="s3-top-left-img">
                        <img src={props.posterImg} alt="" />
                    </div>
                    <div className="s3-top-left-details">
                        <div className="s3-top-left-poster">
                            {props.posterName}
                        </div>
                        <div className="s3-top-left-date">
                            {props.postDate}
                        </div>
                    </div>
                </div>
                <div className="s3-top-right">
                    <FaUser/>
                    <span>2.0</span>
                </div>
            </div>
            <div className="s3-card-middle">
                <div className="s3-middle-box">
                    <div className="s3-box-title">
                        {props.title}
                    </div>
                    <div className="s3-box-status">
                        <div>Male</div>
                    </div>
                    <div className="s3-box-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor perferendis 
                        nobis
                    </div>
                    <div className="s3-box-price">
                        <span className="s3-price-amount">${props.price}</span>
                        <span className="s3-price-day"> / Day</span>
                    </div>
                </div>
            </div>
            <div className="s3-card-bottom">
                <div className="s3-bottom-date">
                    {props.fromDate} - {props.toDate}
                </div>
                <div className="s3-bottom-save">
                    <BsBookmark/>
                </div>
            </div>
        </div>
    )
}

export default Section2Card