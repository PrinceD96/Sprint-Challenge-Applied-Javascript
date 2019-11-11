// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    const topics = response.data.topics;
    topics.forEach(topic => {
      // console.log(topic);

      // create a Tab Component
      const tabComponent = document.createElement("div");
      tabComponent.classList.add("tab");
      tabComponent.textContent = topic;

      // add it to the DOM under the .topics element
      const topicsContainer = document.querySelector(".topics")
      topicsContainer.appendChild(tabComponent);
    });
  })
  .catch(error => {
    console.log("Something went wrong =>", error);
  })


