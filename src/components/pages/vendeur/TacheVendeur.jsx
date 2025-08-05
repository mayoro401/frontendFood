import React from 'react'
import {FaSitemap,FaShoppingCart,FaShoppingBasket } from 'react-icons/fa'

function TacheVendeur() {
  return (
    <>
    <div class="row">
      <div class="col-sm-4">
        <div class="card" id="categorie">
          <div class="card-body">
            <h5 class="card-title">Catégories</h5>
            <div className="categorie">
              <div className="valeur">
                <h1>5</h1>
              </div>
              <div className="icon">
                <a href="vendeur/categorie" class="btn btn-warning ">
                <FaSitemap/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" id="produit">
          <div class="card-body">
            <h5 class="card-title">Produits</h5>
            <div className="produits">
              <div className="valeur">
                <h1>100</h1>
              </div>
              <div className="icon">
                <a href="vendeur/produits" class="btn btn-success">
                <FaShoppingCart/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card" id="commandes">
          <div class="card-body">
            <h5 class="card-title">Commandes</h5>
            <div className="commande">
              <div className="valeur">
                <h1>15</h1>
              </div>
              <div className="icon">
                <a href="vendeur/panier" class="btn btn-danger">
                <FaShoppingBasket/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default TacheVendeur
