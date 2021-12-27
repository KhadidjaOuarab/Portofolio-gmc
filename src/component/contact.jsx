import React from 'react'
import '../component/contact.css'  

function contact({image, p1, p2}) {
    return (
        <div className="contactCSS">
            <img className="image" src={image}   />
            <div>
              <p>{p1}</p>
              <p>{p2}</p>
            </div>
        </div>
    )
}

export default contact
