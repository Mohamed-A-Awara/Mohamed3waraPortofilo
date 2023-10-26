import React from 'react'
import './Skills.css'
function Progressitems() {
    return (
        <>
            <div class="skills">
                    <div class="outer">
                        <div class="inner">
                            <div id="number">
                                75%
                            </div>
                        </div>
                    </div>
                    <svg xmlns ="http://www.w3.org/2000/svg" version="1.1" width="260px" height="250px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%"  stop-color="#DA22FF"/>
                                <stop offset="100%"  stop-color="#9733EE"/>
                            </linearGradient>
                        </defs>
                        <circle cx="100" cy="100" r="80" stroke-linecap="round"/>
                    </svg>
            </div>
        </>
    )
}

export default Progressitems
