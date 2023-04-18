function getStorage() {
  let intialStorage = { firstname: "Katrine", lastname: "Jensen" };
  localStorage.setItem("name", JSON.stringify(intialStorage));

  document.getElementById("lastname").innerHTML = localStorage.getItem("name");
}

function parseStorage() {
  let name = JSON.parse(localStorage.getItem("name"));

  console.log(name);
}
