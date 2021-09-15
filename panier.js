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
const finaliserPanier = document.createElement("div");
finaliserPanier.classList.add("finaliser-panier");
// bloc final
const btnValidationPanier = document.createElement("button");
btnValidationPanier.classList.add("validation");
btnValidationPanier.innerHTML = "Validation";
const btnAnnulationPanier = document.createElement("button");
btnAnnulationPanier.classList.add("annulation");
btnAnnulationPanier.innerHTML = "annulation";
// creation des btn de finalisation

// creation des cibles
console.log(titrePanier);
console.log(listeGlobalePanier);
console.log(totalGlobalPanier);
console.log(totalPanier);
console.log(finaliserPanier);

resumePanier.appendChild(titrePanier);
resumePanier.appendChild(listeGlobalePanier);
totalGlobalPanier.appendChild(totalPanier);
finaliserPanier.appendChild(btnValidationPanier);
finaliserPanier.appendChild(btnAnnulationPanier);
totalGlobalPanier.appendChild(finaliserPanier);
resumePanier.appendChild(totalGlobalPanier);

// ajout du contenu dans la page panier
console.log(resumePanier);

// creation dynamique du panier
if (selectionUserLocalStorage === null) {
	listeGlobalePanier.appendChild(panierVide);
	console.log("je suis vide");
	// panier vide
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
		// // verifier la presence d'un article dans le panier
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
