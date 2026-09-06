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

const signupForm = document.getElementById("signupForm");
const formError = document.getElementById("formError");
const successMessage = document.getElementById("successMessage");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const favoriteRecipe = document.getElementById("favoriteRecipe");
const experience = document.getElementById("experience");

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formError.textContent = "";
    successMessage.textContent = "";

    if (
        fullName.value.trim() === "" ||
        email.value.trim() === "" ||
        favoriteRecipe.value.trim() === "" ||
        experience.value.trim() === ""
    ) {
        formError.textContent = "Please fill out all required fields.";
        return;
    }

    if (!email.value.includes("@")) {
        formError.textContent = "Please enter a valid email address.";
        return;
    }

    successMessage.textContent = "Form submitted successfully!";
});

fullName.addEventListener("input", () => formError.textContent = "");
email.addEventListener("input", () => formError.textContent = "");
favoriteRecipe.addEventListener("input", () => formError.textContent = "");
experience.addEventListener("input", () => formError.textContent = "");

const apiButton = document.getElementById("apiButton");
const apiResult = document.getElementById("apiResult");

apiButton.addEventListener("click", function () {

    fetch("https://catfact.ninja/fact")
        .then(response => {

            if (!response.ok) {
                throw new Error("API request failed");
            }

            return response.json();
        })

        .then(data => {
            apiResult.textContent = data.fact;
        })

        .catch(error => {
            apiResult.textContent =
                "Unable to load a fact right now.";
        });

});