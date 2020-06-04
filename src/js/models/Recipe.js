import { elements, renderLoader } from "../views/base";

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const data = await fetch(
                `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
            );
            const result = data.json();
            return result;
        } catch (err) {}
    }
}
