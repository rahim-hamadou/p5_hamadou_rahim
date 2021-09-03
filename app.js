btn.onclick = () => {
    fetch("http://localhost:3000/api/teddies" + products.value)

    .then(function(res) {
            if (res.ok) {
                return res.json()
            }
        })
        // .then(function(products) {
        //     console.table(res);
        // })
        .then(function(res) {
            products.textContent = `nos produits ${ res }`;
        })

}