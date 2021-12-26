import React from 'react'
import '../component/header.css'

function header(props) {
    return (
        <div className='entete'>
            <div className='gauche' >
                <h1>{props.name}</h1>
                <p>{props.fonction}</p>
            </div>
            <ul className='menu' >
                <li> <a href=''>HOME </a></li>
                <li> <a>RESUME  </a></li>
                <li> <a>PROJECT </a></li>
                <li>  <a>CONTACT  </a></li>
            </ul>
        </div>
    )
}

export default header
