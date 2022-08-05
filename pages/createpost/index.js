import {Fragment} from "react"
import NavBar from "../../components/common/navbar"
import { useState } from "react"

import Amenity from "../../components/createpost/amenities"
import AmenitySelected from "../../components/createpost/amenities/amenitySelected"
import AmenityUnselected from "../../components/createpost/amenities/amenityUnselected"

// import { selectMale,selectFemale,setSelectMale,setSelectFemale,handlePartner } from "./functions/handlePartner"

import {BsGenderMale,BsGenderFemale} from "react-icons/bs"

function CreatePost(){

    const [whatOpen,setWhatOpen] = useState(false)
    const [whereOpen,setWhereOpen] = useState(false)
    const [whenOpen,setWhenOpen] = useState(false)
    const [budgetOpen,setBudgetOpen] = useState(false)
    const [descriptionOpen,setDescriptionOpen] = useState(false)
    const [amenitiesOpen,setAmenitiesOpen] = useState(false)
    const [partnerOpen,setPartnerOpen] = useState(false)
    const [picturesOpen,setPicturesOpen] = useState(false)

    const [AmenitiesSelected,setAmenititesSelected] = useState(
        [false,false,false,false,false,false,false,false]
    )

    const AllAmenities=[
        "Television","Wifi","Washer","Balcony","Cleaner","Radio","Lift","Other"
    ]

    const [television,setTelevision]=useState(false)
    const [wifi,setWifi]=useState(false)
    const [washer,setWasher]=useState(false)
    const [balcony,setBalcony]=useState(false)
    const [cleaner,setCleaner]=useState(false)
    const [radio,setRadio]=useState(false)
    const [lift,setLift]=useState(false)
    const [other,setOther]=useState(false)
    

    const setFunctions=[
        setTelevision,
        setWifi,
        setWasher,
        setBalcony,
        setCleaner,
        setRadio,
        setLift,
        setOther
    ]

    const [selectMale,setSelectMale] = useState(false)
    const [selectFemale,setSelectFemale] = useState(false)

    function handlePartner(sex){
        if (sex==1){
            if (!selectMale){
                setSelectMale(true)
            }
            else{
                setSelectMale(false)
            }
            if (selectFemale){
                setSelectFemale(false)
            }
        }
        else{
            if (!selectFemale){
                setSelectFemale(true)
            }
            else{
                setSelectFemale(false)
            }
            if (selectMale){
                setSelectMale(false)
            }
        }
    }

    const [selectBooked,setSelectBooked] = useState(false)
    const [selectFinding,setSelectFinding] = useState(false)

    function handleWhat(status){
        if (status==1){
            if (!selectBooked){
                setSelectBooked(true)
            }
            else{
                setSelectBooked(false)
            }
            if (selectFinding){
                setSelectFinding(false)
            }
        }
        else{
            if (!selectFinding){
                setSelectFinding(true)
            }
            else{
                setSelectFinding(false)
            }
            if (selectBooked){
                setSelectBooked(false)
            }
        }    }

    // const [AllAmenities,setAllAmenities]= useState(
    //     [
    //         {
    //             name:"Television",
    //             selected:false
    //         },
    //         {
    //             name:"Wifi",
    //             selected:false
    //         },
    //         {
    //             name:"Washer",
    //             selected:false
    //         },
    //         {
    //             name:"Balcony",
    //             selected:false
    //         },
    //         {
    //             name:"Cleaner",
    //             selected:false
    //         },
    //         {
    //             name:"Radio",
    //             selected:false
    //         },
    //         {
    //             name:"Lift",
    //             selected:false
    //         },
    //         {
    //             name:"Other",
    //             selected:false
    //         },
    //     ]
    // )

    function dummyClick(){
        alert(document.getElementById('dummyElement').id)
        document.getElementById('dummyElement').click()
    }

    function handleAmenity(ind){
        const fun=setFunctions[ind]
        fun()
        var newAmenitiesSelected = AmenitiesSelected
        newAmenitiesSelected[ind]=!(newAmenitiesSelected[ind])
        setAmenititesSelected(newAmenitiesSelected)
        // const newAllAmenities=AllAmenities
        // newAllAmenities[ind].selected=!(AllAmenities[ind].selected)
        // setAllAmenities(newAllAmenities)
        // dummyClick()
        return
    }

    return (
        <Fragment>
            <NavBar/>

            <div id="dummyElement"></div>

            <div className="createpost-body">

                <div className="createpost-title">
                    Create post and find partners
                </div>

                <form className="createpost-form-body" action="">
                    <div className="form-entry">
                        <div className="form-entry-label" onClick={()=>setWhatOpen(!whatOpen)} >What are you looking for?</div>
                        {whatOpen && 
                            <div className="form-entry-field">
                                <div className="what-body">
                                    <div onClick={()=>handleWhat(1)}>
                                    {selectBooked?
                                        <div className="what-option-selected">
                                            <div className="what-option-left">
                                                Already Booked
                                            </div>
                                            <div className="what-option-right">
                                                My hotel is booked just looking for partner
                                            </div>
                                        </div>:
                                        <div className="what-option">
                                            <div className="what-option-left">
                                                Already Booked
                                            </div>
                                            <div className="what-option-right">
                                                My hotel is booked just looking for partner
                                            </div>
                                        </div>
                                    }
                                    </div>
                                    <div onClick={()=>handleWhat(0)}>
                                        {selectFinding?
                                        <div className="what-option-selected">
                                            <div className="what-option-left">
                                                Finding Partner
                                            </div>
                                            <div className="what-option-right">
                                                I'm looking for travel partner
                                            </div>
                                        </div>:
                                        <div className="what-option">
                                            <div className="what-option-left">
                                                Finding Partner
                                            </div>
                                            <div className="what-option-right">
                                                I'm looking for travel partner
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                                <button className="create-post-next-btn">Next</button>
                            </div>
                        }
                    </div>
                    <div className="form-entry">
                        <div className="form-entry-label" onClick={()=>setWhereOpen(!whereOpen)} >Where do you want to go?</div>
                        {whereOpen && 
                            <div className="form-entry-field">
                                <input className="input-box" type="text" placeholder=""/>
                                <button className="create-post-next-btn">Next</button>
                            </div>
                        }
                    </div>
                    <div className="form-entry">
                        <div className="form-entry-label" onClick={()=>setWhenOpen(!whenOpen)} >What do you want to go?</div>
                        {whenOpen && 
                            <div className="form-entry-field">
                                <input className="input-box" type="text" placeholder=""/>
                                <button className="create-post-next-btn">Next</button>
                            </div>
                        }
                    </div>
                    <div className="form-entry">
                        <div className="form-entry-label" onClick={()=>setBudgetOpen(!budgetOpen)} >Your budget for hotel?</div>
                        {budgetOpen && 
                            <div className="form-entry-field">
                                <input className="input-box" type="text" placeholder=""/>
                                <button className="create-post-next-btn">Next</button>
                            </div>
                        }
                    </div>
                    <div className="form-entry">
                        <div className="form-entry-label" onClick={()=>setDescriptionOpen(!descriptionOpen)} >Description about the place?</div>
                        {descriptionOpen && 
                            <div className="form-entry-field">
                                <textarea className="input-box"></textarea>
                                <button className="create-post-next-btn">Next</button>
                            </div>
                        }
                    </div>
                    <div className="form-entry">
                        <div className="form-entry-label" onClick={()=>setAmenitiesOpen(!amenitiesOpen)} >Amenitites available</div>
                        {amenitiesOpen && 
                            <div className="form-entry-field">
                                <div className="amenities-body">
                                    <div onClick={()=>setTelevision(!television)} className="amenity-body">
                                        {television?<AmenitySelected amenityName={'television'}/>:<AmenityUnselected amenityName={'television'}/>}
                                    </div>

                                    <div onClick={()=>setWifi(!wifi)} className="amenity-body">
                                        {wifi?<AmenitySelected amenityName={'wifi'}/>:<AmenityUnselected amenityName={'wifi'}/>}
                                    </div>

                                    <div onClick={()=>setWasher(!washer)} className="amenity-body">
                                        {washer?<AmenitySelected amenityName={'washer'}/>:<AmenityUnselected amenityName={'washer'}/>}
                                    </div>

                                    <div onClick={()=>setBalcony(!balcony)} className="amenity-body">
                                        {balcony?<AmenitySelected amenityName={'balcony'}/>:<AmenityUnselected amenityName={'balcony'}/>}
                                    </div>

                                    <div onClick={()=>setCleaner(!cleaner)} className="amenity-body">
                                        {cleaner?<AmenitySelected amenityName={'cleaner'}/>:<AmenityUnselected amenityName={'cleaner'}/>}
                                    </div>

                                    <div onClick={()=>setRadio(!radio)} className="amenity-body">
                                        {radio?<AmenitySelected amenityName={'radio'}/>:<AmenityUnselected amenityName={'radio'}/>}
                                    </div>

                                    <div onClick={()=>setLift(!lift)} className="amenity-body">
                                        {lift?<AmenitySelected amenityName={'lift'}/>:<AmenityUnselected amenityName={'lift'}/>}
                                    </div>

                                    <div onClick={()=>setOther(!other)} className="amenity-body">
                                        {other?<AmenitySelected amenityName={'other'}/>:<AmenityUnselected amenityName={'other'}/>}
                                    </div>

                                    {/* {AllAmenities.map((amenity,index)=>{
                                        return(
                                            <div onClick={()=>handleAmenity(index)} className="amenity-body">
                                                {AmenitiesSelected[index]?<AmenitySelected amenityName={amenity}/>:<AmenityUnselected amenityName={amenity}/>}
                                            </div>
                                        )
                                    })} */}
                                </div>
                                <button className="create-post-next-btn">Next</button>
                            </div>
                        }
                    </div>
                    <div className="form-entry">
                        <div className="form-entry-label" onClick={()=>setPartnerOpen(!partnerOpen)} >Type of partner you are looking for</div>
                        {partnerOpen && 
                            <div className="form-entry-field">
                                <div className="partner-body">
                                    <div onClick={()=>handlePartner(1)}>
                                    {selectMale? 
                                        <div className="partner-option-selected">
                                            <BsGenderMale/>
                                            <span>Male</span>
                                        </div>:
                                        <div className="partner-option">
                                            <BsGenderMale/>
                                            <span>Male</span>
                                        </div>
                                    }
                                    </div>
                                    <div onClick={()=>handlePartner(0)}>
                                    {selectFemale? 
                                        <div className="partner-option-selected">
                                            <BsGenderMale/>
                                            <span>Female</span>
                                        </div>:
                                        <div className="partner-option">
                                            <BsGenderFemale/>
                                            <span>Female</span>
                                        </div>
                                    }
                                    </div>
                                </div>
                                <button className="create-post-next-btn">Next</button>
                            </div>
                        }
                    </div>
                    <div className="form-entry">
                        <div className="form-entry-label" onClick={()=>setPicturesOpen(!picturesOpen)} >Upload pictures</div>
                        {picturesOpen && 
                            <div className="form-entry-field">
                                <div className="pictures-body">
                                    <div className="pictures-msg">
                                        Select photos from local device
                                    </div>
                                    <div>
                                        <button className="pictures-upload-btn">
                                            Upload
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </form>

                {/* <FormControl className="createpost-form-body">
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl> */}
            </div>


        </Fragment>
    )
}

export default CreatePost