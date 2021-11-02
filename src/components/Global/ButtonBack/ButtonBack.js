import React from 'react'
import './ButtonBack.css'

import { useHistory } from 'react-router-dom'
function ButtonBack() {
    const history = useHistory()

    const backToHomepage = () => {
        history.push("/")
    }
    return (
        <div className="buttonback">
           <button type="button" onClick={backToHomepage}>Back</button> 
        </div>
    )
}

export default ButtonBack
