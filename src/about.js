function buildAboutPage() {
    const container = document.querySelector("#content");

    // create header
    const h1 = document.createElement("h1");
    h1.textContent = "About The Molecular Bistro";
    container.appendChild(h1);

    // image
    const img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=700&q=80");
    img.setAttribute("alt", "Chef at work");
    img.setAttribute("style", "max-width:90%;height:auto;");
    container.appendChild(img);

    // paragraph
    const p = document.createElement("p");
    p.textContent = "Explore our innovative selection of molecular cuisine:";
    container.appendChild(p);

    // about items
    const aboutItems = [
        ["The Molecular Bistro was founded by passionate chefs who believe dining should be an adventure. We blend science and art to create unforgettable molecular cuisine experiences."],
        ["Our team is dedicated to innovation, hospitality, and delighting guests with every dish. Join us and discover a new world of flavor!"],
    ];

    aboutItems.forEach(([item]) => {
        const p = document.createElement("p");
        p.textContent = `${item}`;
        container.appendChild(p);
    });

    return container;
}

export { buildAboutPage };