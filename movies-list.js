const moviesLists = ["inception", "Momento", "Batman", "Intersteller"];

const ulList = document.getElementById("ulList");
const add = document.getElementById("add");
const movieInput = document.getElementById("movieInput");
const filter = document.getElementById("filter");

function showlist() {
  moviesLists.forEach((ele, idx) => {
    var li = document.createElement("li");
    li.innerHTML = ele;
    ulList.appendChild(li);
  });
}
showlist();

// addlist(moviesList);

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

filter.addEventListener("click", () => {
  const result = moviesLists.filter((x) => x == movieInput.value);
  const isExist = result.length > 0;
  if (isExist) {
    searchResult.innerHTML = `The entered value ${movieInput.value} is in the list`;
  } else {
    searchResult.innerHTML = `The entered value ${movieInput.value} is not in the list`;
  }
});

const searchResult = document.getElementById("search-result");

function filterMovie() {
  // fetch the input value
  const result = moviesLists.filter((x) => x == movieInput.value);
  const isExist = result.length > 0;
  if (isExist) {
    searchResult.innerHTML = `The entered value ${movieInput.value} is in the list`;
  } else {
    searchResult.innerHTML = `The entered value ${movieInput.value} is not in the list`;
  }
}
