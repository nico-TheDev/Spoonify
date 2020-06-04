export const elements = {
    searchForm : document.querySelector('.header__form'),
    searchInput:document.querySelector('.header__input'),
    resultsPanel:document.querySelector('.results-panel'),
    recipeModal:document.querySelector('.recipe-container')
};

export const renderLoader = () =>{
    const loader = document.createElement('img');
    loader.setAttribute('src','./img/loader.gif');
    loader.className = 'loader';

    elements.resultsPanel.insertAdjacentElement('beforeend',loader);

    setTimeout(()=>{
        loader.remove();
    },1000);
}