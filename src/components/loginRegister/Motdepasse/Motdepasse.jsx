import React from 'react'
import Avantnav from '../../navsllidprofoot/Avantnav/Avantnav'
import Footer from '../../navsllidprofoot/Footer/Footer'
// import Navb from '../../navsllidprofoot/Navb/Navb'
import './Motdepasse.css'

function Motdepasse() {
  return (
    <>
    <Avantnav/>
    {/* <Navb/> */}
    <h5>Mot de passe oublié</h5>
     <div className="mdp">
       <div className="img">
         <img src="./images/passe.png" alt="img register" width="250px" heigth="300px" />
       </div>
       <div className="champs">
         <form>
           <label htmlFor="password">Ancien mot de passe</label><br />
           <input type="password" placeholder="**********"/><br />
           <label htmlFor="password">Nouveau mot de passe</label><br />
           <input type="password" placeholder="Mot de passe"/><br />
           <label htmlFor="password">Confirmation Mot de passe</label><br />
           <input type="password" placeholder="Mot de passe"/><br /><br />
           <button id='btn' type='submit'>Enregistrer</button><br />
         </form>
       </div>
     </div>
     <Footer/>
     </>
  )
}

export default Motdepasse
