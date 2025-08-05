import React from 'react'
import { FaEye } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import HeadVendeur from '../vendeur/HeadVendeur';
import Footer from '../../navsllidprofoot/Footer/Footer';

function DetailProduitme() {
  return (
    <>
    <HeadVendeur/>
    <div className="detailProduit">
        <div className="imagedetail">
            <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="autredetail">
            <p>Nom produit</p>
            <div className="descproduit">
                description
            </div>
            <div className="prixproduit">
                10000Cfa
            </div>
            <div class="card-body">
              <a href="#/" class="card-link" id="achat">
                <BsCart4 /> Ajouter au panier
              </a>
              <a href="#/" class="card-link" id="detail">
                <FaEye /> Retour
              </a>
            </div>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default DetailProduitme
