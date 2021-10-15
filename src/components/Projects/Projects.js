import React from 'react'
import './Projects.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function Projects() {
    return (
        <div className="projects">
            <h3>Moje Projekty</h3>
            <div className="projects__container">

            </div>
            <div className="projects__bottom">
                <ArrowDownwardIcon sx={{fontSize: 80}} />
                <p>More..</p>
            </div>
        </div>
    )
}

export default Projects
