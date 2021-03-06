import retrieveContent from "./query.js";

// async function showContent() {
// 	try {
// 		const content = await retrieveContent();
// 		console.log(content);

// 		let dataHtml = "";
// 		content.forEach((peluche) => {
// 			dataHtml += "<p>Name : " + peluche["name"] + "</p>";
// 			dataHtml += '<img src="' + peluche["imageUrl"] + '" alt="" id="articleImg">';
// 			dataHtml += "<p>price : " + peluche["price"] + "</p>";
// 		});

// 		let peluches = document.getElementById("peluches");
// 		peluches.innerHTML = dataHtml;
// 	} catch (e) {
// 		console.log("Error", e);
// 	}
// }

// showContent();
// --------------------------------page Accueil
// ----------------------------creation des variables
const liste = document.querySelector(".liste");
const btn = document.querySelector(".btn");
const mainTitle = document.querySelector(".main-title");
const container = document.querySelector(".container-principal");
const erreurChargement = document.createElement("h2");
erreurChargement.classList.add("erreur-chargement");
//on lie les elements HTML a des variables JS

// btn.addEventListener("click", () => {
// 	mainTitle.textContent = "Ils sont trop mignons";

fetch("http://localhost:3000/api/teddies")
	// appel a l'API via fetch
	.then((reponse) => reponse.json())
	//ensuite transformation de la promesse en json
	// .then((data) => console.log(data))
	//affichage du contenu des data de la reponse.json
	.then((data) => {
		//creation de la boucle qui va permettre d'ajouter dynamiquement du contenu
		for (let i = 0; i < data.length; i++) {
			//on itere dans les elements de response

			const products = [data[i]];
			//creation d'un tableau avec les differents produits
			// console.log(products);

			const newIdCarteUrl = data[i]._id;
			//creation de la variable url lié a l'id
			// console.log(newIdCarteUrl);

			const nomProduit = data[i].name;
			const descriptionProduit = data[i].description;
			const priceProduit = data[i].price;
			const imgUrlProduit = data[i].imageUrl;
			console.log(imgUrlProduit);
			// declaration des variables

			let newLi = document.createElement("li");
			let newTitreCarte = document.createElement("h2");
			let newBodyCarte = document.createElement("p");
			let newPrice = document.createElement("p");
			let newImg = document.createElement("img");
			let newBtn = document.createElement("button");
			//on cree les elements qui vont servir de cible.

			newBtn.innerHTML = "Commander";
			newBtn.value = "./produit.html";
			//creation du bouton et de sa destination

			newTitreCarte.innerText = data[i].name;
			// newTitreCarte.innerText = data[i].title;
			newBodyCarte.innerText = data[i].description;
			// newBodyCarte.innerText = data[i].body;
			newPrice.innerText = data[i].price / 100 + " €";
			//on apporte du contenu aux elements cree par le biais de chaque element [i] de data.

			newImg.setAttribute("src", data[i].imageUrl);
			newImg.setAttribute("alt", "image de peluche");
			// liaison de l'image du produit via le data de la response fetch

			newLi.appendChild(newImg);
			newLi.appendChild(newTitreCarte);
			newLi.appendChild(newBodyCarte);
			newLi.appendChild(newPrice);
			newLi.appendChild(newBtn);
			//on ajoute donc les elements a la cible (les li cree dynamiquement)

			liste.appendChild(newLi);
			//enfin on ajoutes ces li au ul principale

			// // 					test implementation html

			// let structureHtml = "";
			// structureHtml += `<li>
			// 		<img src=${imgUrlProduit} alt="image de peluche" />
			// 		<h2>${nomProduit}</h2>
			// 			<p>
			// 				${descriptionProduit}
			// 			</p>
			// 			<p>${priceProduit} €</p>
			// 		<button value="./produit.html">Commander</button>
			// </li>`;

			// //							injection HTML

			// //
			// liste.innerHTML = structureHtml;

			// // fin  implementation html

			newBtn.addEventListener("click", function () {
				window.location = "../produit.html?" + "id=" + newIdCarteUrl;
				//creation de la fonction qui redirige vers la page produit selon l'id
				//cela grace au ? et a la variable recuperant l'id
			});
		}

		//-----------------------------------page produit
	})
	.catch(function (error) {
		container.appendChild(erreurChargement);
		erreurChargement.innerHTML =
			"Une erreur est survenu lors du chargement des produits. Nous sommes en train de nous en occupez, veuillez revenir plus tard.\n Merci de votre comprehension";
		console.log("Il y a eu un problème avec l'opération fetch: " + error.message);
	});
// });
