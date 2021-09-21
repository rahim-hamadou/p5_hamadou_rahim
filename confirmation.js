// verification de l'acces a l'id genere par le serveur
// console.log(localStorage.reponseServerId);

// ------------------------------selection d'elements------------------------------

// bloc global de la page de confirmation
const confirmationBloc = document.querySelector(".confirmation");

// test fichier
// confirmationBloc.style.background = "beige";

// recuperation de l'id dans le local storage
const reponseId = localStorage.reponseServerId;
console.log("L'id crée par le serveur : " + reponseId);

// constante qui servira a recuperé les inofrmations panier
const recapPanier = localStorage.produitUser;
console.log("l'ensemble des produit de la commande :" + recapPanier);

// recuperation du prix de l'ensemble des elements
const prixTotal = localStorage.prixTotalPanier;
console.log("Le prix total du panier : " + prixTotal);

// creation de la structure html
const titreConfirmationBloc = document.createElement("div");
titreConfirmationBloc.classList.add("entete-confirmation");
const titreConfirmation = document.createElement("h1");
titreConfirmation.innerHTML = "Récapitulatif de votre commande";
const SousTitreConfirmation = document.createElement("h2");
SousTitreConfirmation.innerHTML = "Merci pour la confiance que vous nous accordez: ";
const referenceCommande = document.createElement("p");
referenceCommande.innerHTML = "Votre commande Numéro : " + "<B>" + reponseId + "<B>" + " a bien été prise en compte.";
const referencePrixTotal = document.createElement("p");
referencePrixTotal.innerHTML = "le montant de votre commande est de : " + "<B>" + prixTotal + "<B>" + " €";
const clotureConfirmation = document.createElement("p");
clotureConfirmation.innerHTML =
	" En attendant que cette commande arrive, n'hesitez pas à a refaire un tour sur la boutique qui est très souvent mise a jour. ";

// Ajout des elements html
confirmationBloc.appendChild(titreConfirmationBloc);
titreConfirmationBloc.appendChild(titreConfirmation);
confirmationBloc.appendChild(SousTitreConfirmation);
confirmationBloc.appendChild(referenceCommande);
confirmationBloc.appendChild(referencePrixTotal);
confirmationBloc.appendChild(clotureConfirmation);

// ------------------------------vider le panier et le local storage------------------------------

// retrait des articles panier du local storage (cela vide le panier)
localStorage.removeItem("produitUser");
localStorage.removeItem("prixTotalPanier");
