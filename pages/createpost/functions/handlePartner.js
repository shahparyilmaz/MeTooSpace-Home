import { useState } from "react"

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

export {selectMale,selectFemale,setSelectMale,setSelectFemale,handlePartner}