import React from 'react'

function Profil() {
  return (
    <div className='profil'>
        <div className="imageprofil">
            <img src="/images/profil.pmg" alt="" />
        </div>
        <div className="name">
            <div className='prenom'>
                name.user
            </div>
            <deiv className="nom">
                lastname.user
            </deiv>
        </div>
        <div className="role">
            role.user
        </div>
        <div className="informtion">
            <div className='email'>user.email</div>
            <div className="telephone">user.phone</div>
            <div className="adresse">user.adresse</div>
        </div>
    </div>
  )
}

export default Profil
