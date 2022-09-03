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
        <button id="catagory-news" onclick="loadNews()" class="fs-6 d-grid gap-2 border-0" > ${news.category_name}</button>
        `;
        catagoryContainer.appendChild(catagoryDiv);

    })
}
const url = ` https://openapi.programming-hero.com/api/news/category/01`;
const loadNews = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

}
// const loadNewsContainer = document.getElementById('loadNews-container');
// const newsInACatagory = document.createElement('div');
// newsInACatagory.innerHTML = `
// <div class="container card mb-3">
// <div class="row g-0">
//     <div class="col-md-4">
//         <img src="..." class="img-fluid rounded-start" alt="...">
//     </div>
//     <div class="col-md-8">
//         <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit longer.</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//         </div>
//     </div>
// </div>
// </div>
// `;



loadNewsCatagories();