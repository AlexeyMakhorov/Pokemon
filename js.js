const fetchPokemonData = async () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`).then((response) => response.json()));
    }

    const results = await Promise.all(promises);
    results.forEach((result) => {
        createPokemonBlock(result);
    });
};

const createPokemonBlock = (item) => {
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = item.name;
    document.body.appendChild(div);
};

fetchPokemonData();