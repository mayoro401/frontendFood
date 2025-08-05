import React from 'react'
import './Produitall.css'
import { FaEye } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import Headadmin from '../../pages/admin/Headadmin';


function DetailProduitall() {
  return (
    <>
    <Headadmin/>
    <div className="detailProduit">
        <div className="imagedetail">
            <img src="/images/logo.png" alt="plat" />
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
              <a href="produits/:id" class="card-link" id="addpanier">
                <BsCart4 fontSize='25px' /> Ajouter au panier
              </a>
              <a href="#/" class="card-link" id="contact">
                <FaEye fontSize='25px'/> Retour
              </a>
            </div>

        </div>
    </div>
    </>
  )
}

export default DetailProduitall
