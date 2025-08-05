import React from "react";
import "./Produitall.css";
import { FaEye } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

function Produitall() {
 
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
  
    
  ];

  return (
    <>
      <div id="pro" className="produitall" >
        <h1>tous les produits</h1>
      </div>
      <div className="mapflex flex-vrap">
        {cards.map((card) => (
          <div class="card col-sm-2">
            <div className="produit">
              <img
                src={card.image}
                class="card-img-top"
                alt="..."
                width="200px"
                heigth="200p"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{card.titre}</h5>
              <p class="card-text">
                {card.prix}
              </p>
            </div>
            {/* <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul> */}
            <div class="card-body">
              <a href="produits/:id" class="card-link" id="achat">
                <BsCart4 /> Achéter
              </a>
              <a href="produits/:id" class="card-link" id="detail">
                <FaEye /> Détails
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Produitall;
