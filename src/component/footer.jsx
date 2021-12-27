import React from 'react'
import Contact from '../component/contact.jsx'
import '../component/footer.css' 
import img1 from '../images/telephone.png'
import img2 from '../images/email.png'
import img3 from '../images/plus.png'
import img4 from '../images/letter-c.png'
function footer() {
    return (
        <div className='footerClass'>
            <Contact image={img1}   p1="Call" p2="0554150824"/>
            <Contact  image={img2}  p1="Email" p2="ouarab.khadidja@gmail.com"/>
            <Contact  image={img3}  p1="Follow me on" p2=""/>
            <Contact  image={img4}  p1="Go My Cod Feb" p2=""/>
        </div>
    )
}

export default footer
