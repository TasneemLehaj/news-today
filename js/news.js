const loadNewsCatagories = () => {
    const url = ` https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCatagories(data.data.news_category))

}

const displayCatagories = (newsCategories) => {
    const catagoryContainer = document.getElementById('catagory-container');
    newsCategories.forEach(news => {
        // console.log(news);
        const catagoryDiv = document.createElement('div');
        catagoryDiv.classList.add('col');
        catagoryDiv.innerHTML = `
        <h1 class="fs-6" > ${news.category_name}</h1>
        `;
        catagoryContainer.appendChild(catagoryDiv);

    })
}
loadNewsCatagories();