import React from 'react'
import './Curriculum.css'
import { useHistory } from "react-router-dom"
import Tagline from './Tagline/Tagline'
import CurriculumContent from './CurriculumContent/CurriculumContent'
function Curriculum() {

    const history = useHistory()
    const backToHomepage = () =>{
        history.push("/")
    }
    return (
        <div className="curriculum">
            <div className="curriculum__top">
           <button type="button" onClick={backToHomepage}>Wróć</button>
            </div>
            <div className="curriuculum__bottom">
                <Tagline />
                <CurriculumContent />
            </div>
        </div>
    )
}

export default Curriculum
