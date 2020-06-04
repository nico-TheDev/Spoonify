import { elements, renderLoader } from "./views/base";
import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";

// STATE
const state = {};

async function searchController(e) {
    e.preventDefault();
    try {
        const searchQuery = elements.searchInput.value;
        state.search = new Search(searchQuery);
        const data = await state.search.searchQuery();
        const recipeList = await data.recipes;

        console.log(recipeList);
        console.log(state);
        searchView.clearPanel();
        renderLoader();
        searchView.renderResults(recipeList);
        searchView.clearInput();
    } catch (err) {
        console.log(err);
    }
}

async function recipeController() {
    try {
        const id = window.location.hash.replace("#", "");
        state.recipe = new Recipe(id);
        const data = await state.recipe.getRecipe();
        const recipe = await data.recipe;
        console.log("the recipe");
        console.log(recipe);
        recipeView.clearModal();
        recipeView.renderRecipe(recipe);
        recipeView.openModal();
    } catch (err) {
        console.log("this is the error");
        console.log(err);
    }
}

// EVENT LISTENERS

elements.searchForm.addEventListener("submit", searchController);
window.addEventListener("hashchange", recipeController);
elements.recipeModal.addEventListener("click", recipeView.closeModal);
