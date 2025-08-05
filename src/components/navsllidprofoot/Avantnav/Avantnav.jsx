import React from 'react'
import './Avantnav.css'

function Avantnav() {
  return (
<div className='avantnav'>
  <div className='contact'>
  <a class="nav-link" href="mailto:papamayorofall401@gmail.com"><i class="fa fa-envelope"></i></a>
  <a class="nav-link" href="tel:+221774313076"><i class="fa fa-phone"></i></a>
  <a class="nav-link" href="/f"><i class="fa fa-facebook"></i></a>
  <a class="nav-link" href="https://wa.me/c/221774313076"><i class="fa fa-whatsapp"></i></a>
  </div>
  <div className='connexion'>
    <button className="login" ><a href='/login'><i class="fa fa-sign-in"></i>connecion</a></button>
    <button className="register"><a href='/register'>Inscription</a></button>
  </div>
</div>
  )
}

export default Avantnav
