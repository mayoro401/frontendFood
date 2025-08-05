import React from "react";
import Avantnav from "../../navsllidprofoot/Avantnav/Avantnav";
import Footer from "../../navsllidprofoot/Footer/Footer";
// import Navb from '../../navsllidprofoot/Navb/Navb'
import "./Register.css";

function Register() {
  return (
    <>
      <Avantnav />
      {/* <Navb/> */}
      <h5>Inscription</h5>
      <div className="inscr">
        <div className="img">
          <img
            src="./images/register.png"
            alt="img register"
            width="250px"
            heigth="300px"
          />
        </div>
        <div className="champs">
          <form>
            <label htmlFor="nom">Nom d'utilisateur</label>
            <br />
            <input type="text" placeholder="Nom d'utilisateur" />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" placeholder="Adresse email" />
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input type="password" placeholder="Mot de passe" />
            <br />
            <label htmlFor="password">Confirmation Mot de passe</label>
            <br />
            <input type="password" placeholder="Mot de passe" />
            <br />
            <label htmlFor="nom">Profil</label>
            <br />
            <input type="file" placeholder="Nom d'utilisateur"  />
            <br />
            <br />
            <button id="btn" type="submit">
              S'inscrire
            </button>
            <br />
            <label htmlFor="redirige">
              <p>
                Avez-vous déja un compte ?<a href="/login">Se connecter</a>
              </p>
            </label>
            <br />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
