import React from 'react'
import Avantnav from './Avantnav/Avantnav'
import Navb from './Navb/Navb'
import Slide from './Slide/Slide'
import Produitall from './Produit/Produitall'
import Footer from './Footer/Footer'
import Ohdelice from './ohdelice/Ohdelice'
import Video from './Video'

function Home() {
  return (
    <div>
      <Avantnav/>
      <Navb/>
      <Slide/>
      <Produitall/>
      <Video/>
      <Ohdelice/>
      <Footer/>
    </div>
  )
}

export default Home
