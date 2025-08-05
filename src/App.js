import "./App.css";
import { Routes, Route } from "react-router-dom";
// ***************page d'accueil********************** */
import Home from "./components/navsllidprofoot/Home";
import Login from "./components/loginRegister/Login/Login";
import Motdepasse from "./components/loginRegister/Motdepasse/Motdepasse";
import Register from "./components/loginRegister/Register/Register";

//***********************page admin************************* */
import Admin from "./components/pages/admin/Admin";
import User from "./components/pages/users/User";
import Categorie from "./components/pages/categorie/Categorie"

//***********************page client************************* */
import Client from "./components/pages/client/Client";

//***********************page vendeur************************* */
import Vendeur from "./components/pages/vendeur/Vendeur";
import Produit from "./components/navsllidprofoot/Produit/Produit";

import { useEffect, useState } from "react";

import Commande from "./components/pages/commande/Commande";
import Produitme from "./components/pages/vendeur/Produitme";
import DetailProduitall from "./components/navsllidprofoot/Produit/DetailProduitall";
import DetailProduitme from "./components/pages/produit/DetailProduitme";
import Profil from "./components/pages/profil/Profil";

function App() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
       <Routes>
        {/* **************Route page d'accueil************************ */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="changePassword" element={<Motdepasse />} />

        {/* **************routes administrateur************************ */}
        <Route path="administrateur" element={<Admin />} />
        <Route path="administrateur/produits" element={<Produit/>} />
        <Route path="administrateur/produits/:id" element={<DetailProduitall/>} />
        <Route path="administrateur/categorie" element={<Categorie/>} />
        <Route path="administrateur/panier" element={<Commande/>} />
        <Route path="administrateur/utilisateurs" element={<User/>} />
        <Route path="administrateur/profil" element={<Profil/>} />

        {/* **************routes vendeur************************ */}
        <Route path="vendeur" element={<Vendeur />} />
        <Route path="vendeur/produits" element={<Produitme/>} />
        <Route path="vendeur/categorie" element={<Categorie/>} />
        <Route path="vendeur/panier" element={<Commande/>} />
        <Route path="vendeur/produits/:id" element={<DetailProduitall/>} />
        <Route path="vendeur/profil" element={<Profil/>} />
      

        {/* **************routes client************************ */}
        <Route path="client" element={<Client />} />
        <Route path="/produits/:id" element={<DetailProduitme/>} />
        <Route path="client/profil" element={<Profil/>} />

      </Routes>

      {/* // <Vendeur>
      //   <Routes>
      //     <Route path="vendeur" element={<Vendeur />} />
      //     <Route path="vendeur/produit" element={<Produit />} />
      //     <Route path="vendeur/commande" element={<Commande />} />
      //     <Route path="vendeur/categorie" element={<Categorie />} />
      //     <Route path="vendeur/produit" element={<Produit />} />
      //   </Routes>
      // </Vendeur>  */}

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
    </>
  );
}

export default App;
