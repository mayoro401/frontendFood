import React from 'react'
import Footer from '../../navsllidprofoot/Footer/Footer'
import Headadmin from '../admin/Headadmin'
import NavAdmin from '../admin/NavAdmin'

function Commande() {
  return (
    <div>
      <Headadmin/>
      <NavAdmin/>
      liste des commandes
      <Footer/>
    </div>
  )
}

export default Commande
