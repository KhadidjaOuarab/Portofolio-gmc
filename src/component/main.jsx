import React from 'react'
import Cercle from '../component/circle'
import '../component/main.css' 
function main({ image, alternative, introduction }) {
    return (
        <div className='mainClass'>
            <div>   <img src={image} alt={alternative} /></div>
            <div>
                <h1>Hello</h1>
                <p>a bit about me</p>
                <div className='mainCircle'>
                    <Cercle content="My RESUME" colorClass= "red"/>
                    <Cercle content="My WORK"  colorClass="blue" />
                    <Cercle content="My SKILS"  colorClass="yellow"/>
                </div>
                <p className='intro'>{introduction}</p>
            </div>

        </div>
    )
}

export default main
