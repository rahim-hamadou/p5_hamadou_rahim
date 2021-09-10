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

// ----------------------------
const liste = document.querySelector(".liste");
const btn = document.querySelector(".btn");
//on lie les elements HTML a des variables JS

// btn.addEventListener("click", () => {
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

			let newLi = document.createElement("li");
			let newTitreCarte = document.createElement("h2");
			let newBodyCarte = document.createElement("p");
			let newPrice = document.createElement("p");
			let newImg = document.createElement("img");
			let newBtn = document.createElement("button");
			//on cree les elements qui vont servir de cible.

			newBtn.innerHTML = "Commander";
			newBtn.value = "./produit.html";
			newTitreCarte.innerText = data[i].name;
			// newTitreCarte.innerText = data[i].title;
			newBodyCarte.innerText = data[i].description;
			// newBodyCarte.innerText = data[i].body;
			newPrice.innerText = data[i].price;
			//on apporte du contenu aux elements cree par le biais de chaque element [i] de data.

			newImg.setAttribute("src", data[i].imageUrl);
			newImg.setAttribute("alt", "image de peluche");

			newLi.appendChild(newImg);
			newLi.appendChild(newTitreCarte);
			newLi.appendChild(newBodyCarte);
			newLi.appendChild(newPrice);
			newLi.appendChild(newBtn);
			//on ajoute donc les elements a la cible (les li cree dynamiquement)

			liste.appendChild(newLi);
			//enfin on ajoutes ces li au ul principale

			newBtn.addEventListener("click", function () {
				window.location = "../produit.html";
				//creation de la fonction qui redirige vers la page produits
			});
		}
	});
