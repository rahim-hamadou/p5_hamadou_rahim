// declaration de variable a stocker dans le local storage
let selectionUserLocalStorage = JSON.parse(localStorage.getItem("produitUser"));
// json.parse afin de convertir au format JavaScript les fichier format JSON du local storage

// console.log(selectionUserLocalStorage);
// on verifie que parse fonctionne

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

// ---------------------------------------------creation des cibles

resumePanier.appendChild(titrePanier);
resumePanier.appendChild(listeGlobalePanier);
totalGlobalPanier.appendChild(totalPanier);
// finaliserPanier.appendChild(btnValidationPanier);
finaliserPanier.appendChild(btnAnnulationPanier);
totalGlobalPanier.appendChild(finaliserPanier);
resumePanier.appendChild(totalGlobalPanier);

//-------------------------- ajout du contenu dans la page panier
// console.log(resumePanier);

// creation dynamique du panier
if (selectionUserLocalStorage === null || selectionUserLocalStorage == 0) {
	listeGlobalePanier.appendChild(panierVide);
	// console.log("je suis vide");
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

// ------------------------------------------calcul de la somme des articles

if (selectionUserLocalStorage === null || selectionUserLocalStorage == 0) {
	listeGlobalePanier.appendChild(panierVide);
	// console.log("je suis vide");
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

// -------------------------------------------creation de la section formulaire--------

const bloc_formulaire = document.querySelector("#form-commande");
// selection de la div cible
// console.log(bloc_formulaire);

const formTitre = document.createElement("h2");
formTitre.innerHTML = "Merci de remplir les informations suivantes pour la commande";
const formListe = document.createElement("form");
// elements principaux

const prenom = document.createElement("div");
const formListePrenomLabel = document.createElement("label");
formListePrenomLabel.innerHTML = "Prenom :";
formListePrenomLabel.setAttribute("for", "prenom");
const formListePrenom = document.createElement("input");
formListePrenom.setAttribute("type", "text");
formListePrenom.setAttribute("name", "prenom");
formListePrenom.setAttribute("required", "");
formListePrenom.setAttribute("id", "prenom");
// prenom
const nom = document.createElement("div");
const formListeNomLabel = document.createElement("label");
formListeNomLabel.innerHTML = "Nom :";
formListeNomLabel.setAttribute("for", "nom");
const formListeNom = document.createElement("input");
formListeNom.setAttribute("type", "text");
formListeNom.setAttribute("name", "nom");
formListeNom.setAttribute("required", "");
formListeNom.setAttribute("id", "nom");
// nom
const adresse = document.createElement("div");
const formListeAdresseLabel = document.createElement("label");
formListeAdresseLabel.innerHTML = "Adresse :";
formListeAdresseLabel.setAttribute("for", "adresse");
const formListeAdresse = document.createElement("input");
formListeAdresse.setAttribute("type", "text");
formListeAdresse.setAttribute("name", "adresse");
formListeAdresse.setAttribute("required", "");
formListeAdresse.setAttribute("id", "adresse");
// adresse
const ville = document.createElement("div");
const formListeVilleLabel = document.createElement("label");
formListeVilleLabel.innerHTML = "Ville :";
formListeVilleLabel.setAttribute("for", "ville");
const formListeVille = document.createElement("input");
formListeVille.setAttribute("type", "text");
formListeVille.setAttribute("name", "ville");
formListeVille.setAttribute("required", "");
formListeVille.setAttribute("id", "ville");
// ville
const codePostal = document.createElement("div");
const formListeCodePostalLabel = document.createElement("label");
formListeCodePostalLabel.innerHTML = "Code postal :";
formListeCodePostalLabel.setAttribute("for", "codeP");
const formListeCodePostal = document.createElement("input");
formListeCodePostal.setAttribute("type", "number");
formListeCodePostal.setAttribute("name", "codeP");
formListeCodePostal.setAttribute("required", "");
formListeCodePostal.setAttribute("id", "codeP");
// code postal
const email = document.createElement("div");
const formListeEmailLabel = document.createElement("label");
formListeEmailLabel.innerHTML = "Email :";
formListeEmailLabel.setAttribute("for", "mail");
const formListeEmail = document.createElement("input");
formListeEmail.setAttribute("type", "mail");
formListeEmail.setAttribute("name", "mail");
formListeEmail.setAttribute("required", "");
formListeEmail.setAttribute("id", "email");
// email
const btn_form = document.createElement("div");

// element du formulaire
const formBtnLabel = document.createElement("label");
const formBtn = document.createElement("button");
formBtn.innerHTML = "Validez l'achat";
// creation du bouton formulaire

// creation des element html

bloc_formulaire.appendChild(formTitre);
bloc_formulaire.appendChild(formListe);
// ajout du titre et formulaire

formListe.appendChild(prenom);
prenom.appendChild(formListePrenomLabel);
prenom.appendChild(formListePrenom);

formListe.appendChild(nom);
nom.appendChild(formListeNomLabel);
nom.appendChild(formListeNom);

formListe.appendChild(adresse);
adresse.appendChild(formListeAdresseLabel);
adresse.appendChild(formListeAdresse);

formListe.appendChild(ville);
ville.appendChild(formListeVilleLabel);
ville.appendChild(formListeVille);

formListe.appendChild(codePostal);
codePostal.appendChild(formListeCodePostalLabel);
codePostal.appendChild(formListeCodePostal);

formListe.appendChild(email);
email.appendChild(formListeEmailLabel);
email.appendChild(formListeEmail);

formListe.appendChild(btn_form);
btn_form.appendChild(formBtnLabel);
btn_form.appendChild(formBtn);
// ajout des elements html

// ------------recuperation des information du formulaire vers le local storage

formBtn.addEventListener("click", (e) => {
	e.preventDefault();
	localStorage.setItem("prenom", document.querySelector("#prenom").value);
	localStorage.setItem("nom", document.querySelector("#nom").value);
	localStorage.setItem("ville", document.querySelector("#ville").value);
	localStorage.setItem("codep", document.querySelector("#codeP").value);
	localStorage.setItem("email", document.querySelector("#email").value);
	// mettre les valeurs du formulaire dans le locale storage
	const formulaire_valeurs = {
		prenom: localStorage.getItem("prenom"),
		nom: localStorage.getItem("nom"),
		ville: localStorage.getItem("ville"),
		codep: localStorage.getItem("codep"),
		email: localStorage.getItem("email"),
	};
	// mettre les valeurs du formulaire dans un objet afin de l'utiliser

	const dataPourServer = {
		selectionUserLocalStorage,
		formulaire_valeurs,
	};
	console.log(dataPourServer);

	// mettre les données formulaires + les articles selectionnés dans un objet pour le serveur
});
// mettre les valeurs du formulaire dans un objet afin de l'utiliser
