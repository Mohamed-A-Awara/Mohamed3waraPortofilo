import React from 'react'
import './Skills.css'
function Barprogress() {
    return (
        <>
            <div className='skills-box'>
                <span className='sk-title'>HTML</span>
                <div className='skill-bar'>
                    <span className='sk-bar html'>
                        <span className='tooltip-text'>98%</span>
                    </span>
                </div>
            </div>
            <div className='skills-box'>
                <span className='sk-title'>CSS</span>
                <div className='skill-bar'>
                    <span className='sk-bar css'>
                        <span className='tooltip-text'>97%</span>
                    </span>
                </div>
            </div>
            <div className='skills-box'>
                <span className='sk-title'>Bootstrap</span>
                <div className='skill-bar'>
                    <span className='sk-bar bootstrap'>
                        <span className='tooltip-text'>97%</span>
                    </span>
                </div>
            </div>
            <div className='skills-box'>
                <span className='sk-title'>JavaScript</span>
                <div className='skill-bar'>
                    <span className='sk-bar js'>
                        <span className='tooltip-text'>92%</span>
                    </span>
                </div>
            </div>
            <div className='skills-box'>
                <span className='sk-title'>React</span>
                <div className='skill-bar'>
                    <span className='sk-bar react'>
                        <span className='tooltip-text'>90%</span>
                    </span>
                </div>
            </div>
        
        </>
    )
}

export default Barprogress
