function buildMenuPage() {
    const container = document.querySelector("#content");

    // create header
    const h1 = document.createElement("h1");
    h1.textContent = "Our Molecular Menu";
    container.appendChild(h1);

    // image
    const img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=700&q=80");
    img.setAttribute("alt", "Molecular Dish");
    img.setAttribute("style", "max-width:90%;height:auto;");
    container.appendChild(img);

    // paragraph
    const p = document.createElement("p");
    p.textContent = "Explore our innovative selection of molecular cuisine:";
    container.appendChild(p);

    // list ul
    const ul = document.createElement("ul");
    ul.setAttribute("style", "list-style:none; padding:0; font-size:1.1rem; color:#444444;");

    const menuItems = [
        ["Spherified Mango Caviar", "Sweet mango pearls served with coconut foam"],
        ["Liquid Olive Explosion", "Olives reimagined as bursting flavor spheres"],
        ["Smoked Salmon Air", "Salmon mousse with dill vapor"],
        ["Chocolate Soil", "Crunchy chocolate crumble with edible flowers"],
        ["Deconstructed Lemon Tart", "Lemon gel, almond dust, and meringue shards"]
    ];

    menuItems.forEach(([title, desc]) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${title}:</strong> ${desc}`;
        ul.appendChild(li);
    });

    container.appendChild(ul);

    return container;
}

export { buildMenuPage };
