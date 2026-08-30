const factButton = document.getElementById("factButton");
const factText = document.getElementById("factText") || document.createElement("p");
factText.id = "factText";
factButton.insertAdjacentElement("afterend", factText);

factButton.addEventListener("click", function () {
    factText.textContent =
        "Baking is considered both a science and an art because measurements must be precise.";
});

const colorInput = document.getElementById("colorInput");
const colorMessage = document.getElementById("colorMessage");

colorInput.addEventListener("input", function () {
    colorMessage.style.color = colorInput.value;
});

const recipeInput = document.getElementById("recipeInput");
const recipeButton = document.getElementById("recipeButton");
const recipeList = document.getElementById("recipeList");

recipeButton.addEventListener("click", function () {
    const recipe = recipeInput.value.trim();
    if (recipe !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = recipe;
        listItem.addEventListener("click", function () {
            recipeList.removeChild(listItem);
        });
        recipeList.appendChild(listItem);
        recipeInput.value = "";
    }
});