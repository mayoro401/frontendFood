import React from 'react'
import './ProduitId.css'
import { FaEye } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { BsFillTrashFill } from "react-icons/bs";

function ProduitId() {
  const cards = [
    {
      image: "../images/logo.png",
      titre: "riz au poisson",
      prix: "1000f",
    },
    {
      image: "../images/logo.png",
      titre: "riz au oisson",
      prix: "1000f",
    },
    {
      image: "../images/logo.png",
      titre: "riz au oisson",
      prix: "1000f",
    },
    {
      image: "../images/logo.png",
      titre: "riz au oisson",
      prix: "1000f",
    },
    {
      image: "../images/logo.png",
      titre: "riz au oisson",
      prix: "7000f",
    },
    {
      image: "../images/logo.png",
      titre: "riz au oisson",
      prix: "3500f",
    },
    {
      image: "../images/logo.png",
      titre: "riz au oisson",
      prix: "500f",
    }
  ];
  return (
    <>
    <div className="produitall">
        <h1>Mes produits</h1>
      </div>
      <div className="mapflex flex-vrap">
      {cards.map((card) => (
        <div class="card col-sm-2">
          <div className="produitme">
            <img
              src={card.image}
              class="card-img-top"
              alt="..."
              width="200px"
              heigth="200p"
            />
          </div>
          <div class="card-body">
            <hr />
            <h5 class="card-title">{card.titre}</h5>
            <p class="card-text">
              {card.prix}
            </p>
          </div>
          
          <div class="card-body">
            <a href="produits/:id" class="card-link" id="achats">
              <TbEdit /> 
            </a>
            <a href="produits/:id" class="card-link" id="details">
              <FaEye /> 
            </a>
            <a href="produits/:id" class="card-link" id="supprimer">
              <BsFillTrashFill /> 
            </a>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default ProduitId
