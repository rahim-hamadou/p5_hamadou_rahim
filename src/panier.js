// declaration de variable a stocker dans le local storage
let selectionUserLocalStorage = JSON.parse(localStorage.getItem("produitUser"));
// json.parse afin de convertir au format JavaScript les fichier format JSON du local storage
// console.log(selectionUserLocalStorage[1].quantite);
// let testPanier = parseInt(selectionUserLocalStorage[1].quantite) + 1;
// console.log(testPanier);

// btn incrementation

// const plus = selectionUserLocalStorage[index].quantite;

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
btnAnnulationPanier.innerHTML = "Vider le panier";
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
			"" +
			" (" +
			"x" +
			selectionUserLocalStorage[i].quantite +
			") " +
			" au prix de : " +
			selectionUserLocalStorage[i].prix * selectionUserLocalStorage[i].quantite +
			" ???";
		// const incrementationProduit = document.createElement("input");
		// listeDetailProduitPanier.appendChild(incrementationProduit);
		// verifier la presence d'un article dans le panier
		/* AJOUT gestion de la quantite */
		const inputNbProducts = document.createElement("input");
		inputNbProducts.setAttribute("type", "number");
		inputNbProducts.setAttribute("name", "nb_products");
		inputNbProducts.setAttribute("required", "");
		inputNbProducts.setAttribute("maxlength", "2");
		inputNbProducts.setAttribute("onKeyPress", "if(this.value.length==2) return false;");
		inputNbProducts.setAttribute("max", "10");
		inputNbProducts.setAttribute("class", "nb_products");
		inputNbProducts.setAttribute("id", "nb_products_" + i.toString());
		inputNbProducts.setAttribute("placeholder", "Quantit??");
		inputNbProducts.value = selectionUserLocalStorage[i].quantite;
		/*AJOUT gestion de la quantite  */
		const btnProduitPanier = document.createElement("button");
		btnProduitPanier.classList.add = "btn-produit-panier";
		btnProduitPanier.innerHTML = "Supprimer l'article";

		listeProduitPanier.appendChild(listeDetailProduitPanier);
		/* AJOUT input quantite */
		listeProduitPanier.appendChild(inputNbProducts);
		/*FIN AJOUT input quantite */
		listeProduitPanier.appendChild(btnProduitPanier);
		listeGlobalePanier.appendChild(listeProduitPanier);

		// console.log(selectionUserLocalStorage.length);

		// voir la taille du tableau
	}
	console.log("je ne suis pas vide");
	//si le panier n'est pas vide
}

let listeBtnProduitPanier = document.querySelectorAll(".recap-produits li button ");
// console.log(listeBtnProduitPanier);
// creation d'une liste btn suppression d'article
if (selectionUserLocalStorage.quantite == null || selectionUserLocalStorage.quantite == 0) {
	for (let i = 0; i < listeBtnProduitPanier.length; i++) {
		listeBtnProduitPanier[i].addEventListener("click", (e) => {
			e.preventDefault();
			let idProduitSuppression = selectionUserLocalStorage[i];
			// let idProduitSuppression = selectionUserLocalStorage[i].idProduit;
			// creation de la variable de l'id du produit au clique du btn

			console.log(selectionUserLocalStorage);
			selectionUserLocalStorage = selectionUserLocalStorage.filter(
				(element) => element !== idProduitSuppression,
				// (element) => element.idProduit !== idProduitSuppression,
			);
			//creation d'une fonction de suppression par elimination
			// console.log(selectionUserLocalStorage);

			localStorage.setItem("produitUser", JSON.stringify(selectionUserLocalStorage));
			// envoie de la nouvelle valeur de la variable vers le locale storage
			// console.log(selectionUserLocalStorage);

			alert("la selection a bien ??t?? supprim??e");
			// message d'information a l'user
			window.location.reload();
			// message d'information a l'user et refresh page pour mettre a jour l'affichage
		});
	}
}

// creation d'une condition pour supprimer la ligne si la quantite est null ou a zero

for (let i = 0; i < selectionUserLocalStorage.length; i++) {
	if (selectionUserLocalStorage[i].quantite == null || selectionUserLocalStorage[i].quantite == 0) {
		alert("Cet article ne sera pas command?? si la quantit?? est ?? zero");
	}
}

// creation d'une condition pour supprimer la ligne si la quantite est null ou a zero
/* AJOUT fonction quantite*/
// -------------------------mise ?? jour du localStorage si modification du nombre d'articles
let nb_products = document.getElementsByClassName("nb_products");
console.log("nb_products=" + nb_products.length);
for (let i = 0; i < nb_products.length; i++) {
	nb_products[i].addEventListener("change", (e) => {
		console.log("avant classname " + selectionUserLocalStorage[i].quantite);
		//validation de l'input

		//modif du selectionUserLocalStorage
		let nb_product = document.getElementById("nb_products_" + i.toString());
		selectionUserLocalStorage[i].quantite = parseInt(nb_product.value);

		localStorage.removeItem("produitUser");
		console.log("apres classname " + selectionUserLocalStorage[i].quantite);
		localStorage.setItem("produitUser", JSON.stringify(selectionUserLocalStorage));

		window.location.reload();
	});
}
/*FIN AJOUT fonction quantite */

// ------------------------creation d'un btn vider le panier afin de supprimer le produit par son id

btnAnnulationPanier.addEventListener("click", (e) => {
	e.preventDefault();
	// ecoute sur le bouton d'annulation
	localStorage.removeItem("produitUser");
	// retrait de l'objet entier du local storage
	alert("Le panier a bien ??t?? vid??");
	// message d'information a l'user
	window.location.href = "./panier.html";
	// rechargement de la page pour voir les modifications
});

// ------------------------------------------calcul de la somme des articles
let prixTotalPanier = "";
// declaration de la variable prix total
if (selectionUserLocalStorage === null || selectionUserLocalStorage == 0) {
	listeGlobalePanier.appendChild(panierVide);
	// console.log("je suis vide");
	// panier non rempli ou vider

	totalGlobalPanier.style.display = "none";
	// on retire la div totalGlobalPanier car le panier est vide, pas besoin de commander ni d'annuler
} else {
	let sommePrixProduitPanier = [];
	for (let i = 0; i < selectionUserLocalStorage.length; i++) {
		let prixProduitPanier = selectionUserLocalStorage[i].prix * selectionUserLocalStorage[i].quantite;
		// creation d ela variable qui regroupe les prix
		console.log("sommePrixProduitPanier.prix");
		console.log(sommePrixProduitPanier);
		// verification de l'affichage du prix d'article

		sommePrixProduitPanier.push(prixProduitPanier);
		// mettre tous les prix dans un tableau
		console.log("sommePrixProduitPanier");
		console.log(sommePrixProduitPanier);
	}
	const addition = (accumulator, currentValue) => accumulator + currentValue;
	// addition des prix contenu dans le tableau avec .reduce
	prixTotalPanier = sommePrixProduitPanier.reduce(addition, 0);
	// console.log(prixTotalPanier);
	// application de la fonction reduce + test ok

	totalPanier.innerHTML = "le total du panier est de : " + prixTotalPanier + " ???";
	// affichage dans le html de la somme des prix d'article panier

	console.log("totalPanier");
	console.log(totalPanier);
	// localStorage.setItem("prixTotalPanier", JSON.stringify(prixTotalPanier));
	// // mettre le prix total dans le locale storage

	// console.log(totalPanier);
	// voir le prix total du panier
}

// -------------------------------------------creation de la section formulaire--------

const bloc_formulaire = document.querySelector("#form-commande");
// selection de la div cible
// console.log(bloc_formulaire);

// cach?? le form si le panier est vide
if (selectionUserLocalStorage === null || selectionUserLocalStorage == 0) {
	listeGlobalePanier.appendChild(panierVide);
	// console.log("je suis vide");
	// panier non rempli ou vider

	bloc_formulaire.style.display = "none";
	// on retire la div bloc_formulaire car le panier est vide, pas besoin de commander ni d'annuler
}
// cach?? le formulaire  si le panier est vide

const formTitre = document.createElement("h2");
formTitre.innerHTML = "Merci de remplir les informations suivantes pour la commande";
const formListe = document.createElement("form");

// elements principaux

const prenom = document.createElement("div");
const formListePrenomLabel = document.createElement("label");
formListePrenomLabel.innerHTML = "Prenom :";
formListePrenomLabel.setAttribute("for", "prenom");
const formSpanPrenom = document.createElement("span");
formSpanPrenom.classList.add("form-erreur");
const formListePrenom = document.createElement("input");
formListePrenom.setAttribute("type", "text");
formListePrenom.setAttribute("name", "prenom");
formListePrenom.setAttribute("required", "");
formListePrenom.setAttribute("id", "prenom");
formListePrenom.setAttribute("placeholder", "Votre prenom");
// prenom
const nom = document.createElement("div");
const formListeNomLabel = document.createElement("label");
formListeNomLabel.innerHTML = "Nom :";
formListeNomLabel.setAttribute("for", "nom");
const formSpanNom = document.createElement("span");
formSpanNom.classList.add("form-erreur");
const formListeNom = document.createElement("input");
formListeNom.setAttribute("type", "text");
formListeNom.setAttribute("name", "nom");
formListeNom.setAttribute("required", "");
formListeNom.setAttribute("id", "nom");
formListeNom.setAttribute("placeholder", "Votre nom");
// nom
const adresse = document.createElement("div");
const formListeAdresseLabel = document.createElement("label");
formListeAdresseLabel.innerHTML = "Adresse :";
formListeAdresseLabel.setAttribute("for", "adresse");
const formSpanAdresse = document.createElement("span");
formSpanAdresse.classList.add("form-erreur");
const formListeAdresse = document.createElement("input");
formListeAdresse.setAttribute("type", "text");
formListeAdresse.setAttribute("name", "adresse");
formListeAdresse.setAttribute("required", "");
formListeAdresse.setAttribute("id", "adresse");
formListeAdresse.setAttribute("placeholder", "Votre adresse");
// adresse
const ville = document.createElement("div");
const formListeVilleLabel = document.createElement("label");
formListeVilleLabel.innerHTML = "Ville :";
formListeVilleLabel.setAttribute("for", "ville");
const formSpanVille = document.createElement("span");
formSpanVille.classList.add("form-erreur");
const formListeVille = document.createElement("input");
formListeVille.setAttribute("type", "text");
formListeVille.setAttribute("name", "ville");
formListeVille.setAttribute("required", "");
formListeVille.setAttribute("id", "ville");
formListeVille.setAttribute("placeholder", "Votre ville");
// ville
const codePostal = document.createElement("div");
const formListeCodePostalLabel = document.createElement("label");
formListeCodePostalLabel.innerHTML = "Code postal :";
formListeCodePostalLabel.setAttribute("for", "codeP");
const formSpanCodePostal = document.createElement("span");
formSpanCodePostal.classList.add("form-erreur");
const formListeCodePostal = document.createElement("input");
formListeCodePostal.setAttribute("type", "number");
formListeCodePostal.setAttribute("name", "codeP");
formListeCodePostal.setAttribute("required", "");
formListeCodePostal.setAttribute("id", "codeP");
formListeCodePostal.setAttribute("placeholder", "Votre code postal");
// code postal
const email = document.createElement("div");
const formListeEmailLabel = document.createElement("label");
formListeEmailLabel.innerHTML = "Email :";
formListeEmailLabel.setAttribute("for", "mail");
const formSpanEmail = document.createElement("span");
formSpanEmail.classList.add("form-erreur");
const formListeEmail = document.createElement("input");
formListeEmail.setAttribute("type", "mail");
formListeEmail.setAttribute("name", "mail");
formListeEmail.setAttribute("required", "");
formListeEmail.setAttribute("id", "email");
formListeEmail.setAttribute("placeholder", "Votre email");
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
prenom.appendChild(formSpanPrenom);
prenom.appendChild(formListePrenom);

formListe.appendChild(nom);
nom.appendChild(formListeNomLabel);
nom.appendChild(formSpanNom);
nom.appendChild(formListeNom);

formListe.appendChild(adresse);
adresse.appendChild(formListeAdresseLabel);
adresse.appendChild(formSpanAdresse);
adresse.appendChild(formListeAdresse);

formListe.appendChild(ville);
ville.appendChild(formListeVilleLabel);
ville.appendChild(formSpanVille);
ville.appendChild(formListeVille);

formListe.appendChild(codePostal);
codePostal.appendChild(formListeCodePostalLabel);
codePostal.appendChild(formSpanCodePostal);
codePostal.appendChild(formListeCodePostal);

formListe.appendChild(email);
email.appendChild(formListeEmailLabel);
email.appendChild(formSpanEmail);
email.appendChild(formListeEmail);

formListe.appendChild(btn_form);
btn_form.appendChild(formBtnLabel);
btn_form.appendChild(formBtn);
// ajout des elements html

// ----------------------recuperation des information du formulaire vers le local storage

formBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const formulaire_valeurs = {
		prenom: document.querySelector("#prenom").value,
		nom: document.querySelector("#nom").value,
		adresse: document.querySelector("#adresse").value,
		ville: document.querySelector("#ville").value,
		codep: document.querySelector("#codeP").value,
		email: document.querySelector("#email").value,
	};
	// mettre les valeurs du formulaire dans un objet afin de l'utiliser

	// ------------------------------------controle du formulaire

	function erreurChampsText(valeur) {
		valeur.textContent = "Veuillez bien remplir ce champ ";
	}
	// fonction du message d'erreur a ffaicher au dessus de l'input

	// creation de fonction utile au formulaire

	const textAlert = (valeur) => {
		return valeur + " : Une erreur est survenue, veuillez verifier le formulaire avant la validation";
	};
	// expression de fonction pour le message d'alerte pour le prenom , nom et ville
	const regExEmail = (valeur) => {
		return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valeur);
	};
	//  expression de fonction regex pour l'email
	const regExCodePostal = (valeur) => {
		return /^[0-9]{5}$/.test(valeur);
	};
	//  expression de fonction regex pour le code postal
	const regExPrenomNomVille = (valeur) => {
		return /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(valeur);
	};
	// expression de fonction regex pour le prenom , nom et ville
	const regExAdresse = (valeur) => {
		return /^[A-Za-z0-9\s]{5,50}$/.test(valeur);
	};
	const regExQuantite = (valeur) => {
		return /^[1-9]{1}$/.test(valeur);
	};
	// expression de fonction regex pour l'adresse

	// --------------------------------------creation des regex
	function controlPrenom() {
		const lePrenom = formulaire_valeurs.prenom;
		if (regExPrenomNomVille(lePrenom)) {
			formListePrenom.classList.remove("formulaire-input-erreur");
			formSpanPrenom.style.display = "none";
			// console.log("ok");
			return true;
		} else {
			console.log("ko");
			erreurChampsText(formSpanPrenom);
			formListePrenom.classList.add("formulaire-input-erreur");
			alert(textAlert("Prenom"));
			return false;
		}
	}
	function controlNom() {
		const leNom = formulaire_valeurs.nom;
		if (regExPrenomNomVille(leNom)) {
			formListeNom.classList.remove("formulaire-input-erreur");
			formSpanNom.style.display = "none";
			// console.log("ok");
			return true;
		} else {
			console.log("ko");
			erreurChampsText(formSpanNom);
			formListeNom.classList.add("formulaire-input-erreur");
			alert(textAlert("Nom"));
			return false;
		}
	}
	function controlVille() {
		const laVille = formulaire_valeurs.ville;
		if (regExPrenomNomVille(laVille)) {
			formListeVille.classList.remove("formulaire-input-erreur");
			formSpanVille.style.display = "none";
			// console.log("ok");
			return true;
		} else {
			console.log("ko");
			erreurChampsText(formSpanVille);
			formListeVille.classList.add("formulaire-input-erreur");
			alert(textAlert("Ville"));
			return false;
		}
	}
	function controlCodePostal() {
		const leCodePostal = formulaire_valeurs.codep;
		if (regExCodePostal(leCodePostal)) {
			formListeCodePostal.classList.remove("formulaire-input-erreur");
			formSpanCodePostal.style.display = "none";
			// console.log("ok");
			return true;
		} else {
			console.log("ko");
			erreurChampsText(formSpanCodePostal);
			formListeCodePostal.classList.add("formulaire-input-erreur");
			alert("Code Postal : il doit etre compos?? de 5 chiffres ");
			return false;
		}
	}
	function controlEmail() {
		const leEmail = formulaire_valeurs.email;
		if (regExEmail(leEmail)) {
			formListeEmail.classList.remove("formulaire-input-erreur");
			formSpanEmail.style.display = "none";
			// console.log("ok");
			return true;
		} else {
			console.log("ko");
			erreurChampsText(formSpanEmail);
			formListeEmail.classList.add("formulaire-input-erreur");
			alert("Email : l'adresse Email n'est pas au bon format ");
			return false;
		}
	}
	function controlAdresse() {
		const laAdresse = formulaire_valeurs.adresse;
		if (regExAdresse(laAdresse)) {
			formListeAdresse.classList.remove("formulaire-input-erreur");
			formSpanAdresse.style.display = "none";
			// console.log("ok");
			return true;
		} else {
			console.log("ko");
			erreurChampsText(formSpanAdresse);
			formListeAdresse.classList.add("formulaire-input-erreur");
			alert("L'adresse : l'adresse postal n'est pas au bon format ");
			return false;
		}
	}

	// --------------------------------------les fonctions de controle

	if (
		controlPrenom() &&
		controlNom() &&
		controlVille() &&
		controlCodePostal() &&
		controlEmail() &&
		controlAdresse()
	) {
		localStorage.setItem("dataUser", JSON.stringify(formulaire_valeurs));
		// mettre les valeurs du formulaire dans le locale storage
		localStorage.setItem("prixTotalPanier", JSON.stringify(prixTotalPanier));
		// mettre le prix total dans le locale storage

		alert("la commande a bien ??t?? lanc??e");
		// message d'information a l'user
		console.log(controlPrenom());
		// ------------------------Envoyer les donn??es vers le serveur
		const dataPourServer = {
			selectionUserLocalStorage,
			formulaire_valeurs,
			prixTotalPanier,
		};
		// mettre les donn??es formulaires + les articles panier dans un objet pour le serveur
		// mettre les valeurs du formulaire et du panier dans le locale storage

		// ------------------------Envoyer vers le server  de test en fetcth
		const commandeEnvoi = fetch("https://restapi.fr/api/orinounours", {
			// cette API est une API test qui renvoi un ID
			method: "POST",
			body: JSON.stringify(dataPourServer),
			headers: {
				"content-type": "application/json",
			},
		});
		// console.log(commande);
		// verification de l'envoi

		// --------------------------------------Test de visualisation de la reponse--------------------------------
		commandeEnvoi.then(async (response) => {
			try {
				const contenuResponse = await response.json();
				console.log("contenuResponse");
				console.log(contenuResponse);
				console.log("contenuResponse.id");
				console.log(contenuResponse._id);
				// ----------------aide a la comprehension en cas d'erreur-------------
				// if (response.ok) {
				// 	console.log(`Resultat de response.ok : ${response.ok}`);
				// } else {
				// 	console.log(`Reponse du server : ${response.status}`);
				// 	alert(`Incident server : Erreur ${response.status}`);
				// }
				// ----------------aide a la comprehension en cas d'erreur----------------
				// si la promesse est resolue

				localStorage.setItem("reponseServerId", contenuResponse._id);
				// ------mettre l'id de l'envoie vers le server dans le locale storage
				window.location.href = "./confirmation.html";
				// redirection vers la page confirmation pour informatio nde commande
			} catch (e) {
				console.log("Erreur venant de la recuperation commande ");
				console.log(e);
				alert(e);
				// si la promesse n'est pas resolue
			}
			console.log(reponseServerId);
		});
		// toutes les instruction peuvent etre remplacer par:  envoyerVersLeServer(dataPourServer)
		// -------------------------voir le resulat de l'envoi POST dans la console
	} else {
		alert(
			"Chiffres et Symboles ne sont pas autoris??s dans les sections Prenom, Nom, Adresse \nLe code postal possede 5 chiffres et l'email doit contenir un @ \nNe pas depasser 20 caract??res, minimum 3 caract??res ",
		);
	}

	// window.location.href = "./panier.html";
	// // message d'information a l' user et refresh page pour mettre a jour l'affichage
});
// // -----------------------creation d'une fonction pour l'envoie vers le server--------------
// function envoyerVersLeServer(dataPourServer) {
// 	// ------------------------Envoyer vers le server  de test en fetcth
// 	const commandeEnvoi = fetch("https://restapi.fr/api/orinounours", {
// 		// cette API est une API test qui renvoi un ID
// 		method: "POST",
// 		body: JSON.stringify(dataPourServer),
// 		headers: {
// 			"content-type": "application/json",
// 		},
// 	});
// 	// console.log(commande);
// 	// verification de l'envoi

// 	// ---------------------------Test de visualisation de la reponse-------------------
// 	commandeEnvoi.then(async (response) => {
// 		try {
// 			const contenuResponse = await response.json();
// 			console.log("contenuResponse");
// 			console.log(contenuResponse);
// 			console.log("contenuResponse.id");
// 			console.log(contenuResponse._id);
// 			// ----------------aide a la comprehension en cas d'erreur-------------
// 			// if (response.ok) {
// 			// 	console.log(`Resultat de response.ok : ${response.ok}`);
// 			// } else {
// 			// 	console.log(`Reponse du server : ${response.status}`);
// 			// 	alert(`Incident server : Erreur ${response.status}`);
// 			// }
// 			// ----------------aide a la comprehension en cas d'erreur----------------
// 			// si la promesse est resolue
// 		} catch (e) {
// 			console.log("Erreur venant de la recuperation commande ");
// 			console.log(e);
// 			alert(e);
// 			// si la promesse n'est pas resolue
// 		}
// 	});
// 	// -------------------------voir le resulat de l'envoi POST dans la console
// }
// // -----------------------creation d'une fonction pour l'envoie vers le server--------------

// ---------conserver les donn??es du local storage dans le formulaire ------------
const dataUserDuLocalStorage = localStorage.getItem("dataUser");
// console.log(dataUserDuLocalStorage);
// recuperer la key du locale storage dans une variable

const dataUserObjet = JSON.parse(dataUserDuLocalStorage);
// console.log(dataUserObjet);
// convertir une chaine de caractere en Objet JS

function remplirLeFormulaire() {
	document.querySelector("#prenom").setAttribute("value", dataUserObjet.prenom);
	formListeNom.value = dataUserObjet.nom;
	formListeAdresse.value = dataUserObjet.adresse;
	formListeVille.value = dataUserObjet.ville;
	formListeCodePostal.value = dataUserObjet.codep;
	formListeEmail.value = dataUserObjet.email;
	// deux methodes possibles
}
// creation d'une fonction qui remplit le formulaire

if (dataUserObjet !== null) {
	remplirLeFormulaire();
} else {
}
// mettre les valeurs de l'objet dataUserobjet dans le formulaire

// -------------------------Page-Confirmation-----------------
