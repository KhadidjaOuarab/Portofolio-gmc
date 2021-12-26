import React from 'react'
import '../component/circle.css' 
function circle(props) {
    return (
        <div>
           <button className={props.colorClass}>{props.content}</button> 
        </div>
    )
}

export default circle
