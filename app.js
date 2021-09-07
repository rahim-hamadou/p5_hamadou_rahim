// init
import retrieveContent from "./query.js";

async function showContent() {
	try {
		const content = await retrieveContent();

		let elt = document.createElement("div");
		elt.innerHTML = content.join("<br />");

		document.getElementsByTagName("body")[0].appendChild(elt);
	} catch (e) {
		console.log("Error", e);
	}
}

showContent();

// init-end
btn.onclick = () => {
	fetch("http://localhost:3000/api/teddies" + products.value)
		.then(function (res) {
			if (res.ok) {
				return res.json();
			}
		})
		// .then(function(products) {
		//     console.table(res);
		// })
		.then(function (res) {
			// products.textContent = `nos produits ${ res }`;
			products.appendChild(res);
		});
};
