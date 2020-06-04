import { elements } from "./base";

class TheRecipe {
    constructor(title, img, author, url, ingredients) {
        this.title = title;
        this.img = img;
        this.author = author;
        this.url = url;
        this.ingredients = ingredients;
        this.servings = 4;
        this.servingTime = 20;
    }
}

export const renderRecipe = async (recipeData) => {
    const recipe = new TheRecipe(
        recipeData.title,
        recipeData.image_url,
        recipeData.publisher,
        recipeData.publisher_url,
        recipeData.ingredients
    );
    const markup = `
    <img src="${recipe.img}" alt="" class="recipe-bg">
    <button class="close">
        <svg class="icon">
            <use href="./img/icons.svg#icon-close-outline"></use>
        </svg>
    </button>
    <div class="recipe">
        <div class="recipe__cover">
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe__img">
        </div>
        <div class="recipe__text">
            <h2 class="recipe__title>${recipe.title}</h2>
            
            <div class="recipe__stats">
                <p class="recipe__stat">
                    <svg class="icon">
                        <use href="./img/icons.svg#icon-star-full"></use>
                    </svg>
                    ${(Math.random() * (5 - 4) + 1).toFixed(2)}/5
                </p>
                <p class="recipe__stat">
                    <svg class="icon">
                        <use href="./img/icons.svg#icon-timer"></use>
                    </svg>
                    ${recipe.servingTime} min
                </p>
                <p class="recipe__stat">
                    <svg class="icon">
                        <use href="./img/icons.svg#icon-group"></use>
                    </svg>
                    ${recipe.servings} servings
                </p>
            </div>
            <h2 class="recipe__title">Ingredients</h2>
            <ul class="recipe__ingredients">
            ${renderIngredients(recipeData.ingredients)}
            </ul>
            <h2 class="recipe__title">Published by: <span class="recipe__author">
            ${recipe.author}</span></h2>
            <a href="${recipe.url}" class="btn">Get Recipe</a>
        </div>
    </div>
    `;

    elements.recipeModal.insertAdjacentHTML("beforeend", markup);
};

function renderIngredients(ingredients) {
    console.log(ingredients);
    ingredients.forEach((ingredient) => {
        let markup = '';
        markup += `<li class="recipe__ingredient">${ingredient}</li>`;

        return markup;
    });
}

export const openModal = () => {
    elements.recipeModal.classList.add("openRecipe");
};

export const closeModal = (e) => {
    console.log(e.target);
    if (e.target.closest(".close"))
        elements.recipeModal.classList.remove("openRecipe");
};

export function clearModal() {
    elements.recipeModal.innerHTML = "";
}
