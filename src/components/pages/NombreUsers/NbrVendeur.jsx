import React from "react";
import './Nombre.css'
import { HiViewGridAdd } from "react-icons/hi";

function NbrVendeur() {
  
  return (
     
    <div>
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        id="modal-btn"
      >
        <HiViewGridAdd /> Ajouter vendeur
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
                Ajout d'un vendeur
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
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NbrVendeur;
