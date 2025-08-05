import React from 'react'
import Avantnav from '../../navsllidprofoot/Avantnav/Avantnav'
import Footer from '../../navsllidprofoot/Footer/Footer'
// import Navb from '../../navsllidprofoot/Navb/Navb'
import './Login.css'

function Login() {
  return (
    <>
    <Avantnav/>
    {/* <Navb/> */}
   <h5>Authentification</h5>
    <div className="connex">
      <div className="img">
        <img src="./images/Tablet login.gif" alt="img register" width="250px" heigth="300px" />
      </div>
      <div className="champs">
        <form>
          <label htmlFor="email">Email</label><br />
          <input type="email" placeholder="Adresse email"/><br />
          <label htmlFor="password">Mot de passe</label><br />
          <input type="password" placeholder="Mot de passe"/><br /><br />
          <button id='btn' type='submit'>Se connecter</button><br />
          <label htmlFor="redirige">
           <p>Avez-vous déja un compte ?
            <a href="/register">S'inscrire</a> /<a href="/changepassword">Mot de passe oublié</a>
            </p>
           </label><br />
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login
