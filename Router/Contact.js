//Nested Router
import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function Contact() {
  return (
    <div>
        <h1>Contact Us Page</h1>
        <h2>Here we have some other business</h2>
        <Link to="company">Company</Link>
        <Link to="channel">Channel</Link>
        <Link to="other">Other</Link>
        <Outlet />
    </div>
  )
}

export default Contact;
//In app.js file this company channel and other componants
//nested in contact route using route
// and give path like contact/componant
