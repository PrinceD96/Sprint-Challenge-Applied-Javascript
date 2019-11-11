// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
	// define components
	const container = document.createElement("div");
	const date = document.createElement("span");
	const title = document.createElement("h1");
	const weather = document.createElement("span");

	// nest components
	container.appendChild(date);
	container.appendChild(title);
	container.appendChild(weather);

	// add content
	date.textContent = "MARCH 28, 2019";
	title.textContent = "Lambda Times";
	weather.textContent = "98°";

	// set classes
	container.classList.add("header");
	date.classList.add("date");
	weather.classList.add("temp");

	return container;
}

// console.log(Header());

const header = document.querySelector(".header-container");
header.appendChild(Header());
