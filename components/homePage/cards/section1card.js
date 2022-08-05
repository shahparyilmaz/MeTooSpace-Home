
function Section1Card(props){
    return (
        <div className="section-1-card-body">
            <div className="s1-card-img">
                <img src={props.imgurl} alt="" />
            </div>
            <div className="s1-card-details">
                <div className="s1-details-upper">
                    <div className="s1-upper-title">
                        {props.title}
                    </div>
                    <div className="s1-upper-poster">
                        {props.poster}
                    </div>
                </div>
                <div className="s1-details-lower">
                    <div className="s1-lower-dates">
                        {props.fromDate} - {props.toDate}
                    </div>
                    <div className="s1-lower-price">
                        <span className="s1 lower-price-amount">${props.price}</span>
                        <span className="s1-lower-price-day"> / Day</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1Card