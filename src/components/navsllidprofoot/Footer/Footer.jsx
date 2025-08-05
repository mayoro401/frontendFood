import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
   <div className="footer">
      <div className="service">
      <label><b>Services</b></label>
      </div>
      <div className="partenaire">
      <label><b>Partenaires</b></label>
      </div>
      <div className="aide">
      <label><b>Aide</b></label>
      </div>
      <div className="Oh_delices">
        <label><b>Oh'Délices</b></label>
        <div className="img">
        <img src="/images/logo.png" alt="logo" width="250px" height="150px"/>
        </div>
      </div>
   </div>
   <div className="copy">
    <p><b>&copy; 2022 Oh'Délices.</b></p>
   </div>
   </>
  )
}

export default Footer
