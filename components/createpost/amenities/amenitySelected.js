import AmenityUnselected from "./amenityUnselected"

function AmenitySelected(props){
    return (
        <div className="amenity-selected">
            {props.amenityName}
        </div>
    )
}

export default AmenitySelected