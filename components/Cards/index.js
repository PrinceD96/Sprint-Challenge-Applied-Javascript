// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const articles = response.data.articles;
    // console.log(articles);

    // Converting the data to an array
    const articlesArray = Object.entries(articles);
    // console.log(articlesArray);


    const article = articlesArray.map(art => art[1]);
    const javascriptArticles = article[0];
    const bootstrapArticles = article[1];
    const technologyArticles = article[2];
    const jqueryArticles = article[3];
    const nodeJSArticles = article[4];
    // console.log(article);
    console.log(javascriptArticles);

    javascriptArticles.forEach(art => {
      const javascript = createArticle(art);
      cardsContainer.appendChild(javascript);
    })

    bootstrapArticles.forEach(art => {
      const bootstrap = createArticle(art);
      cardsContainer.appendChild(bootstrap);
    })

    technologyArticles.forEach(art => {
      const technology = createArticle(art);
      cardsContainer.appendChild(technology);
    })

    jqueryArticles.forEach(art => {
      const jquery = createArticle(art);
      cardsContainer.appendChild(jquery);
    })

    nodeJSArticles.forEach(art => {
      const nodeJS = createArticle(art);
      cardsContainer.appendChild(nodeJS);
    })

  })

function createArticle(article) {
  // define components
  const container = document.createElement("div");
  const header = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  // nest components
  container.appendChild(header);
  container.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(image);

  // add content
  header.textContent = article.headline;
  image.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  // set classes 
  container.classList.add("card");
  header.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  return container
}

