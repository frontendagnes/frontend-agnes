import React from 'react'
import './Skill.css'
function Skill({ title, content }) {
    return (
        <div className="skill">
            <div className="skill__title">
                {title}
            </div>
            <div className="skill__content">
                {content}
            </div>
        </div>
    )
}

export default Skill
