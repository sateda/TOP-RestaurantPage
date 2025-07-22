function buildHomePage() {
    const container = document.querySelector("#content");

    // create header
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to The Molecular Bistro!";
    container.appendChild(h1);

    // image
    const img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=700&q=80");
    img.setAttribute("alt", "Molecular Gastronomy Dish");
    img.setAttribute("style", "max-width:100%;height:auto;");
    container.appendChild(img);

    // paragraph
    const p1 = document.createElement("p");
    p1.textContent = "Discover a new dimension of dining at The Odin Bistro, where culinary artistry meets science. Our chefs specialize in, transforming the freshest ingredients into visually stunning and delicious creations using innovative techniques.";
    container.appendChild(p1);

    // paragraph
    const p2 = document.createElement("p");
    p2.textContent = "From edible spheres and foams to aromatic vapors, every dish is a multisensory experience designed to surprise and delight. Join us for an unforgettable evening of gastronomic adventure in a stylish, welcoming atmosphere.";
    container.appendChild(p2);

    return container;
}

export { buildHomePage };