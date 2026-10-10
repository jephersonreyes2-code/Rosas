const garden = document.querySelector("#garden");
const numberOfFlowers = 8;

for (let i = 0; i < numberOfFlowers; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.setAttribute("role", "img");
    flower.setAttribute("aria-label", "Flor decorativa");

    for (let petalNumber = 1; petalNumber <= 8; petalNumber++) {
        const petal = document.createElement("div");
        petal.className = `flower-petal_${petalNumber}`;
        flower.appendChild(petal);
    }

    for (let lightNumber = 0; lightNumber < 4; lightNumber++) {
        const light = document.createElement("div");
        light.className = "flower-Light";
        flower.appendChild(light);
    }

    garden.appendChild(flower);
}