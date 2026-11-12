const produits = [
    { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
    { id: 2, nom: 'Souris', prix: 90, stock: 0 },
    { id: 3, nom: 'Écran', prix: 1400, stock: 2 }
];
console.log(produits[1].nom);
console.log(produits[2].prix);
function creerFiche(produit) {
let article = document.createElement("article");

    let titre = document.createElement("h2");
    titre.textContent = produit.nom;

    let prix = document.createElement("p");
    prix.textContent = produit.prix + " DH";

    article.appendChild(titre);
    article.appendChild(prix);

    article.classList.add("border", "p-4", "rounded-lg");
if (produit.stock === 0) {
 let parag = document.createElement("p");
parag.textContent = "Rupture";
parag.classList.add("text-red-500");

        article.appendChild(parag);
    }

    return article;
}


let catalogue = document.getElementById("catalogue");
produits.forEach((produit) => {
    let fiche = creerFiche(produit);
    catalogue.appendChild(fiche);
});