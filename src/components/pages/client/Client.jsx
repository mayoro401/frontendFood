// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
// import './Client.css'

// function Client({children}) {
//   const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Dashboard",
//             icon:<FaTh/>
//         },
//         {
//             path:"/about",
//             name:"profile",
//             icon:<FaUserAlt/>
//         },
//         {
//             path:"/analytics",
//             name:"Produits",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"/comment",
//             name:"Command",
//             icon:<FaCommentAlt/>
//         },
//         {
//             path:"/product",
//             name:"Product",
//             icon:<FaShoppingBag/>
//         },
//         {
//             path:"/productList",
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

// export default Client
import React from 'react'
import Footer from '../../navsllidprofoot/Footer/Footer'
import Ohdelice from '../../navsllidprofoot/ohdelice/Ohdelice'
import Produitall from '../../navsllidprofoot/Produit/Produitall'
import Video from '../../navsllidprofoot/Video'
import HeadClient from './HeadClient'
import NavClient from './NavClient'

function Client() {
  return (
    <>
    <HeadClient/>
    <NavClient/>
    <Produitall/>
    <Video/>
    <Ohdelice/>
    <Footer/>
    </>
  )
}

export default Client
