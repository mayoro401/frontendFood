import React from "react";
import "./Admin.css";
import {FaUserPlus, FaShoppingCart, FaSitemap, FaShoppingBasket} from 'react-icons/fa'

function Tacheadmin() {
  return (
    <div class="row">
      <div class="col-sm-3">
        <div class="card" id="users">
          <div class="card-body">
            <h5 class="card-title">Utilisateurs</h5>
            <div className="users">
              <div className="valeur">
                <h1>10</h1>
              </div>
              <div className="icon">
                <a href="administrateur/utilisateurs" class="btn btn-dark">
                 <FaUserPlus /> 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card" id="categorie">
          <div class="card-body">
            <h5 class="card-title">Catégories</h5>
            <div className="categorie">
              <div className="valeur">
                <h1>5</h1>
              </div>
              <div className="icon">
                <a href="administrateur/categorie" class="btn btn-warning active">
                  <FaSitemap/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card" id="produit">
          <div class="card-body">
            <h5 class="card-title">Produits</h5>
            <div className="produits">
              <div className="valeur">
                <h1>250</h1>
              </div>
              <div className="icon">
                <a href="administrateur/produits" class="btn btn-success">
                  <FaShoppingCart/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card" id="commandes">
          <div class="card-body">
            <h5 class="card-title">Commandes</h5>
            <div className="commande">
              <div className="valeur">
                <h1>25</h1>
              </div>
              <div className="icon">
                <a href="administrateur/panier" class="btn btn-danger">
                  <FaShoppingBasket/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tacheadmin;
