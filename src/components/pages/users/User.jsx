import React from 'react'
import Footer from '../../navsllidprofoot/Footer/Footer'
import Headadmin from '../admin/Headadmin'
import NavAdmin from '../admin/NavAdmin'
import NbrClient from '../NombreUsers/NbrClient'
import NbrVendeur from '../NombreUsers/NbrVendeur'

function User() {
  return (
   <>
   <Headadmin/>
   <NavAdmin/>
   <NbrVendeur/>
   <hr />
   <NbrClient/>
   <Footer/>
   </>
  )
}

export default User
