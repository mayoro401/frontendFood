// import React, {useState} from 'react'
// import {
//   FaTh,
//   FaBars,
//   FaUserAlt,
//   FaRegChartBar,
//   FaCommentAlt,
//   FaShoppingBag,
//   FaThList
// }from "react-icons/fa";

// import { NavLink } from 'react-router-dom';
// import './Vendeur.css'

// function Vendeur({children}) {
 
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"vendeur",
//             name:"Dashboard",
//             icon:<FaTh/>
//         },
//         {
//             path:"profile",
//             name:"profile",
//             icon:<FaUserAlt/>
//         },
//         {
//             path:"produit",
//             name:"Produits",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"commande",
//             name:"Commande",
//             icon:<FaCommentAlt/>
//         },
//         {
//             path:"categorie",
//             name:"Catégorie",
//             icon:<FaShoppingBag/>
//         },
//         {
//             path:"productList",
//             name:"Product List",
//             icon:<FaThList/>
//         }
//     ]
//   return (
//     <div className="container">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//   )
// }

// export default Vendeur


import React from 'react'
import Footer from '../../navsllidprofoot/Footer/Footer'
import Ohdelice from '../../navsllidprofoot/ohdelice/Ohdelice'
import Video from '../../navsllidprofoot/Video'
import HeadVendeur from './HeadVendeur'
import NavVendeur from './NavVendeur'
import TacheVendeur from './TacheVendeur'

function Vendeur() {
  return (
    <>
    <HeadVendeur/>
    <NavVendeur/>
    <TacheVendeur/>
    <Video/>
    <Ohdelice/>
    <Footer/>
    </>
  )
}

export default Vendeur
