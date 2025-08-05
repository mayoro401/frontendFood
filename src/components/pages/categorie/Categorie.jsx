import React from "react";
import "./Categorie.css";
import Footer from "../../navsllidprofoot/Footer/Footer";
import Headadmin from "../admin/Headadmin";
import { HiViewGridAdd } from "react-icons/hi";

function Categorie() {
  return (
    <>
      <Headadmin />

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-success right"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <HiViewGridAdd /> Ajouter Catégorie
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ajout d'un Catégorie
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="Add">
                <div className="img">
                  <img
                    src="../images/add cat.png"
                    alt="img register"
                    width="250px"
                    heigth="300px"
                  />
                </div>
                <div className="champs">
                  <form>
                    <label For="categorie">Catégorie</label>
                    <br />
                    <input type="text" placeholder="Nom catégorie" />
                    <br />
                    <br />
                    <button id="btn" type="submit">
                      Valider
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Categorie;
