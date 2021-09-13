//-------------------- Test page produit.js
const test = document.querySelector(".main-title-choice");

test.style.background = "violet";

// -------------------recuperation de l'id url par produit

const queryString_url_id = window.location.search;
// on recupupere le complement de l'url

// //  -------------------------test 1:
// const idPage_produit = queryString_url_id.slice(4);
// // recuperation de l'id dans l'url du produit dans le complement url, en coupant la valeur recuperé d uwindow.location.search
// console.log(queryString_url_id);
// console.log(idPage_produit);

//  -------------------------test 2:-------------

const urlSearchParams = new URLSearchParams(queryString_url_id);
// application du constructor URLSearchParams
// console.log(urlSearchParams);

const id = urlSearchParams.get("id");
// recuperation de l'id via la methode get du constructor (recupere l'element id= dans l'url)
// console.log(id);
//on verifie l'id par parge produit

// ------------------------affichage en fonction de l'id-----------

//----------faire un fetch avec un slash suivi de l'id en fin d'url-------

let ficheProduit = fetch("http://localhost:3000/api/teddies/" + id)
	.then((reponse) => reponse.json())
	// .then((dataProduit) => {
	// 	console.log(dataProduit);
	// 	// on verifie ce que nous retourne le fetch
	// })
	.then((dataProduit) => {
		// ---------Preparer la page a recevoir le contenu du produit
		const shoppingProduit = document.querySelector(".shopping-product");
		// console.log(dataProduit);
		const listeProduits = document.querySelector(".listeProduits");
		// console.log(listeProduits);
		const btnProduit = document.querySelector(".btn");
		// Selection de la cible du html dynamique

		// liaison de l'image du produit via le data de la response fetch

		let liProduit = document.createElement("li");
		let titreCarteProduit = document.createElement("h2");
		let titreBodyProduit = document.createElement("p");
		let priceProduit = document.createElement("p");
		//on cree les element html
		let imgProduit = document.createElement("img");
		imgProduit.setAttribute("src", dataProduit.imageUrl);
		imgProduit.setAttribute("alt", "image de peluche");
		//on cree l'image
		let btnValideProduit = document.createElement("button");
		//creation du bouton
		let formProduit = document.createElement("form");
		//creation d'un formulaire
		let optionProduit = document.createElement("input");
		optionProduit.type = "radio";
		optionProduit.for = "optionProduit";
		optionProduit.label = "choixCouleur";
		optionProduit.value = dataProduit.colors;
		let labelCouleur = document.createElement("label");
		labelCouleur.htmlFor = "couleurs";

		// On crée un form

		optionProduit.action = "/cgi-bin/some.cgi";
		// On y ajoute des attributs action et method
		optionProduit.method = "POST";
		// optionProduit.submit();
		// On appelle la méhtode submit pour l'envoyer

		//on cree les elements qui vont servir de cible.

		btnValideProduit.innerHTML = "Ajouter au panier";
		btnValideProduit.type = "submit";
		btnValideProduit.name = "btnValideProduit";
		btnValideProduit.value = "./panier.html";
		//creation du bouton panier et de sa destination

		titreCarteProduit.innerText = dataProduit.name;
		// newTitreCarte.innerText = data[i].title;
		titreBodyProduit.innerText = dataProduit.description;
		// newBodyCarte.innerText = data[i].body;
		priceProduit.innerText = dataProduit.price / 100 + " €";
		//on apporte du contenu aux elements cree par le biais de chaque element [i] de data.

		liProduit.appendChild(imgProduit);
		liProduit.appendChild(titreCarteProduit);
		liProduit.appendChild(titreBodyProduit);
		liProduit.appendChild(priceProduit);

		formProduit.appendChild(optionProduit);
		liProduit.appendChild(labelCouleur);

		liProduit.appendChild(formProduit);
		liProduit.appendChild(btnValideProduit);
		// On l'ajoute au corps du document

		//on ajoute donc les elements a la cible (les li cree dynamiquement)
		console.log(listeProduits);

		listeProduits.appendChild(liProduit);
		// //enfin on ajoutes ces li au ul principale
	});
