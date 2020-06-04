export default class Search {
    constructor(query) {
        this.query = query;
    }

    async searchQuery() {
        try {
            const data = await fetch(
                `https://forkify-api.herokuapp.com/api/search?q=${this.query}`
            );
            const result = data.json();

            return result;
        } catch (err) {
            console.log(err);
        }
    }

}
