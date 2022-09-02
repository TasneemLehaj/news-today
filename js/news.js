const loadNewsCatagories = () => {
    const url = ` https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json)
        .then(data => displayCatagories(data.data))

}

const displayCatagories = (news) => {
    const catagoryContainer = document.getElementById('catagory-container');
    news.forEach(news => {
        console.log(news);
        const catagoryDiv = document.createElement('div');
        catagoryDiv.innerHTML = `
        <h1>Catagory name: ${news.news_category}</h1>
        `;
        catagoryContainer.appendChild(catagoryDiv);

    })
}
loadNewsCatagories();