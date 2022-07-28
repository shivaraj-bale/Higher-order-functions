let moviesLists = ["inception", "Momento", "Batman", "Intersteller"];

const ulList = document.getElementById("ulList");
const add = document.getElementById("add");
const movieInput = document.getElementById("movieInput");
const filter = document.getElementById("filter");
const searchResult = document.getElementById("search-result");

function showlist() {
  moviesLists.forEach((ele, idx) => {
    var li = document.createElement("li");
    li.innerHTML = ele;
    ulList.appendChild(li);
  });
}
showlist();

// addlist(moviesList);

/* when we enter new text in the input field, it adds in the li*/
add.addEventListener("click", addlist);

function addlist() {
  var li = document.createElement("li");
  // console.log(movieInput.value);
  li.innerHTML = movieInput.value;
  moviesLists.push(movieInput.value);
  ulList.appendChild(li);
  movieInput.value = "";
  movieInput.focus();
}

/* for Filter button */

filter.addEventListener("click", () => {
  const result = moviesLists.filter((x) => x == movieInput.value);
  const isExist = result.length > 0;
  if (isExist) {
    searchResult.innerHTML = `The entered value ${movieInput.value} is in the  list`;
  } else {
    searchResult.innerHTML = `The entered value ${movieInput.value} is not in the list`;
  }
});

/* for Map button */
const map = document.getElementById("map");

map.addEventListener("click", () => {
  ulList.innerHTML = "";
  const resmap = moviesLists.map((x) => x + " " + movieInput.value);
  moviesLists = resmap;
  console.log(resmap);
  resmap.forEach((el) => {
    var li = document.createElement("li");
    // console.log(movieInput.value);
    li.innerHTML = el;
    ulList.appendChild(li);
    movieInput.value = "";
    movieInput.focus();
  });
});
