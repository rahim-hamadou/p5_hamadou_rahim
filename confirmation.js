// verification de l'acces a l'id genere par le serveur
// console.log(localStorage.reponseServerId);

// ------------------------------selection d'elements------------------------------

// bloc global de la page de confirmation
const confirmationBloc = document.querySelector(".confirmation");
// test fichier
confirmationBloc.style.background = "beige";

// recuperation de l'id dans le local storage
const reponseId = localStorage.reponseServerId;
console.log("L'id crée par le serveur : " + reponseId);

// constante qui servira a recuperé les inofrmations panier
const recapPanier = localStorage.produitUser;
console.log("l'ensemble des produit de la commande :" + recapPanier);

// recuperation du prix de l'ensemble des elements
const prixTotal = localStorage.prixTotalPanier;
console.log("Le prix total du panier : " + prixTotal);

// ------------------------------vider le panier et le local storage------------------------------

// // retrait des articles panier du local storage (cela vide le panier)
// localStorage.removeItem("produitUser");
// localStorage.removeItem("prixTotalPanier");
