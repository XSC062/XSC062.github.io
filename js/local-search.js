/* global CONFIG, pjax, LocalSearch */

document.addEventListener('DOMContentLoaded', () => {
    const bg = document.getElementById('search-bg')
    const modal = document.getElementById('search-box');
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    const localSearch = new LocalSearch({
        path: searchPath
    });
    localSearch.fetchData();
    document.querySelector('#Search').addEventListener('click', () => {
        $("#search-bg, #search-bg *").css("z-index", "1002"); 
        $("#search-bg, #search-bg *").css("opacity", "100%");
        $("#search-bg, #search-bg *").css("transition", "opacity .2s"); 
        input.focus();
    });
    bg.addEventListener('click', (e) => {
        if (e.target === bg) {
            $("#search-bg, #search-bg *").css("transition", "null"); 
            $("#search-bg, #search-bg *").css("z-index", "-1"); 
            $("#search-bg, #search-bg *").css("opacity", "0%");
        }
    });
    input.addEventListener('input', () => {
        const query = input.value.split(" ");
        const res = localSearch.getResultItems(query);
        results.innerHTML = '';
        res.forEach(item => {
            results.innerHTML += item.item;
        });
    });
});