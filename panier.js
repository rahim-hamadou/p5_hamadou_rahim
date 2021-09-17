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
panierVide.classList.add("panier-vide");
panierVide.innerHTML = "Votre panier est vide";
//creation du message en cas de panier vide
const totalGlobalPanier = document.createElement("div");
totalGlobalPanier.classList.add("total-produit");
// bloc final
const totalPanier = document.createElement("div");
totalPanier.classList.add("total-prix");
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
btnValidationPanier.innerHTML = "Commander";
// validation pour commande
const btnAnnulationPanier = document.createElement("button");
btnAnnulationPanier.classList.add("annulation");
btnAnnulationPanier.innerHTML = "Annuler";
// annulation pour vider le panier
// creation des btn de finalisation

// creation des cibles

resumePanier.appendChild(titrePanier);
resumePanier.appendChild(listeGlobalePanier);
totalGlobalPanier.appendChild(totalPanier);
finaliserPanier.appendChild(btnValidationPanier);
finaliserPanier.appendChild(btnAnnulationPanier);
totalGlobalPanier.appendChild(finaliserPanier);
resumePanier.appendChild(totalGlobalPanier);

//-------------------------- ajout du contenu dans la page panier
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
// console.log(listeBtnProduitPanier);
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
		// message d'information a l'user
		window.location.href = "./panier.html";
		// message d'information a l'user et refresh page pour mettre a jour l'affichage
	});
}

// ------------------------creation d'un btn vider le panier afin de supprimer le produit par son id

btnAnnulationPanier.addEventListener("click", (e) => {
	e.preventDefault();
	// ecoute sur le bouton d'annulation
	localStorage.removeItem("produitUser");
	// retrait de l'objet entier du local storage
	alert("Le panier a bien été vidé");
	// message d'information a l'user
	window.location.href = "./panier.html";
	// rechargement de la page pour voir les modifications
});

// -------------calcul de la somme des articles

if (selectionUserLocalStorage === null || selectionUserLocalStorage == 0) {
	listeGlobalePanier.appendChild(panierVide);
	console.log("je suis vide");
	// panier non rempli ou vider

	totalGlobalPanier.style.display = "none";
	// on retire la div totalGlobalPanier car le panier est vide, pas besoin de commander ni d'annuler
} else {
	let sommePrixProduitPanier = [];
	for (let i = 0; i < selectionUserLocalStorage.length; i++) {
		let prixProduitPanier = selectionUserLocalStorage[i].prix;
		// creation d ela variable qui regroupe les prix
		// console.log(sommePrixProduitPanier);
		// verification de l'affichage du prix d'article

		sommePrixProduitPanier.push(prixProduitPanier);
		// mettre tous les prix dans un tableau
	}

	const addition = (accumulator, currentValue) => accumulator + currentValue;
	// addition des prix contenu dans le tableau avec .reduce
	const prixTotalPanier = sommePrixProduitPanier.reduce(addition, 0);
	// console.log(prixTotalPanier);
	// application de la fonction reduce + test ok

	totalPanier.innerHTML = "le total du panier est de : " + prixTotalPanier + " €";
	// affichage dans le html de la somme des prix d'article panier

	console.log(totalPanier);
}
