import retrieveContent from "./query.js";

async function showContent() {
	try {
		const content = await retrieveContent();
		console.log(content);

		let dataHtml = "";
		content.forEach((peluche) => {
			dataHtml += "<p>Name : " + peluche["name"] + "</p>";
			dataHtml += '<img src="' + peluche["imageUrl"] + '" alt="" id="articleImg">';
			dataHtml += "<p>price : " + peluche["price"] + "</p>";
		});

		let peluches = document.getElementById("peluches");
		peluches.innerHTML = dataHtml;
		// elt.innerHTML = "<p>test</p>" + content.join('<br />');

		// if ("content" in document.createElement("template")) {

		//   // On prépare une ligne pour le tableau
		//   var template = document.querySelector("#productrow");
		// }

		// document.getElementsByTagName('body')[0].appendChild(elt);
	} catch (e) {
		console.log("Error", e);
	}
}

showContent();

// test js
const footer = document.querySelector("footer");
footer.style.background = "red";
