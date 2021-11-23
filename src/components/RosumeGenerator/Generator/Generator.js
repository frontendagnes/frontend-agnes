import React from 'react'
import './Generator.css'

// components
import GeneratorSidebar from '../GeneratorSidebar/GeneratorSidebar'
import GeneratorContent from '../GeneratorContent/GeneratorContent'
function Generator() {
    return (
        <div className="generator">
            <GeneratorContent />
            <GeneratorSidebar />
        </div>
    )
}

export default Generator
