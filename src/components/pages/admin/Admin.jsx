import React from 'react'
import Footer from '../../navsllidprofoot/Footer/Footer'
import Ohdelice from '../../navsllidprofoot/ohdelice/Ohdelice'
import Video from '../../navsllidprofoot/Video'
import Headadmin from './Headadmin'
import NavAdmin from './NavAdmin'
import Tacheadmin from './Tacheadmin'



function Admin() {
  return (
    <div>
      <Headadmin/>
      <NavAdmin/>
      <Tacheadmin/>
      <Video/>
      <Ohdelice/>
      <Footer/>
    </div>
  )
}

export default Admin
