// declaration de variable a stocker dans le local storage
let selectionUserLocalStorage = JSON.parse(localStorage.getItem("produitUser"));
// json.parse afin de convertir au format JavaScript les fichier format JSON du local storage

console.log(selectionUserLocalStorage);

const resumePanier = document.querySelector("#shopping-panier");

const titrePanier = document.createElement("div");
titrePanier.classList.add("le-panier");
titrePanier.innerHTML = " Votre panier : ";
// titre du bloc panier
const listeGlobalePanier = document.createElement("ul");
listeGlobalePanier.classList.add("recap-produits");
// block article
const panierVide = document.createElement("li");
panierVide.innerHTML = "Votre panier est vide";
//creation du message en cas de panier vide
const totalGlobalPanier = document.createElement("div");
totalGlobalPanier.classList.add("total-produit");
// bloc final
const totalPanier = document.createElement("div");
totalPanier.classList.add("total-prix");
totalPanier.innerHTML = "le total du panier est de : ";
// choix final
const btnProduitPanier = document.createElement("button");
btnProduitPanier.classList.add = "btn-produit-panier";
btnProduitPanier.innerHTML = "Supprimer l'article";
// creation du btn suppression article
const finaliserPanier = document.createElement("div");
finaliserPanier.classList.add("finaliser-panier");
// bloc final
const btnValidationPanier = document.createElement("button");
btnValidationPanier.classList.add("validation");
btnValidationPanier.innerHTML = "Validation";
// validation pour commande
const btnAnnulationPanier = document.createElement("button");
btnAnnulationPanier.classList.add("annulation");
btnAnnulationPanier.innerHTML = "annulation";
// annulatio npour vider le panier
// creation des btn de finalisation

// creation des cibles

resumePanier.appendChild(titrePanier);
resumePanier.appendChild(listeGlobalePanier);
totalGlobalPanier.appendChild(totalPanier);
finaliserPanier.appendChild(btnValidationPanier);
finaliserPanier.appendChild(btnAnnulationPanier);
totalGlobalPanier.appendChild(finaliserPanier);
resumePanier.appendChild(totalGlobalPanier);

// ajout du contenu dans la page panier
// console.log(resumePanier);

// creation dynamique du panier
if (selectionUserLocalStorage === null || selectionUserLocalStorage == 0) {
	listeGlobalePanier.appendChild(panierVide);
	console.log("je suis vide");
	// panier non rempli ou vider
} else {
	let structurePanier = [];
	for (let i = 0; i < selectionUserLocalStorage.length; i++) {
		let listeProduitPanier = document.createElement("li");
		let listeDetailProduitPanier = document.createElement("p");
		listeDetailProduitPanier.innerHTML =
			selectionUserLocalStorage[i].nomProduit +
			" de couleur : " +
			selectionUserLocalStorage[i].optionCouleur +
			" au prix de : " +
			selectionUserLocalStorage[i].prix +
			" €";
		// const incrementationProduit = document.createElement("input");
		// listeDetailProduitPanier.appendChild(incrementationProduit);
		// verifier la presence d'un article dans le panier
		const btnProduitPanier = document.createElement("button");
		btnProduitPanier.classList.add = "btn-produit-panier";
		btnProduitPanier.innerHTML = "Supprimer l'article";

		listeProduitPanier.appendChild(listeDetailProduitPanier);
		listeProduitPanier.appendChild(btnProduitPanier);
		listeGlobalePanier.appendChild(listeProduitPanier);

		console.log(selectionUserLocalStorage.length);
	}
	console.log("je ne suis pas vide");
	//si le panier n'est pas vide
}

let listeBtnProduitPanier = document.querySelectorAll(".recap-produits li button ");
console.log(listeBtnProduitPanier);
// creation d'une liste btn suppression d'article

for (let i = 0; i < listeBtnProduitPanier.length; i++) {
	listeBtnProduitPanier[i].addEventListener("click", (e) => {
		e.preventDefault();
		let idProduitSuppression = selectionUserLocalStorage[i].idProduit;
		// creation de la variable de l'id du produit au clique du btn

		selectionUserLocalStorage = selectionUserLocalStorage.filter(
			(element) => element.idProduit !== idProduitSuppression,
		);
		//creation d'une fonction de suppression par elimination
		// console.log(selectionUserLocalStorage);

		localStorage.setItem("produitUser", JSON.stringify(selectionUserLocalStorage));
		// envoie de la nouvelle valeur de la variable vers le locale storage
		// console.log(selectionUserLocalStorage);
		alert("la selection a bien été supprimée");
		window.location.href = "./panier.html";
		// message d'information a l'user et refresh page pour mettre a jour l'affichage
	});
}
