import React from 'react'
import './Curriculum.css'
import { Link } from "react-router-dom"
import Tagline from './Tagline/Tagline'
import CurriculumContent from './CurriculumContent/CurriculumContent'
function Curriculum() {
    return (
        <div className="curriculum">
            <div className="curriculum__top">
                <Link to="/"><button>Wróć na stronę główną</button></Link>
            </div>
            <div className="curriuculum__bottom">
                <Tagline />
                <CurriculumContent />
            </div>
        </div>
    )
}

export default Curriculum
