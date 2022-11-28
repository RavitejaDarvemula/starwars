let nameEl = document.getElementById("name-el");
let heightEl = document.getElementById("height-el");
let massEl = document.getElementById("mass-el");
let birthYearEl = document.getElementById("birthYear-el");
function getInfo() {
  let randomNumber = Math.floor(Math.random() * 88 + 1);
  let apiUrl = "https://swapi.dev/api/people/" + randomNumber;

  axios
    .get(apiUrl)
    .then((response) => {
      updateInfo(response.data);
    })
    .catch((e) => {
      updateInfoWithError();
    });
}
function updateInfo(data) {
  nameEl.innerText = `Name: ${data.name}`;
  heightEl.innerText = `Height: ${data.height}`;
  massEl.innerText = `Mass: ${data.mass}`;
  birthYearEl.innerText = `Birth Year: ${data.birth_year}`;
}
function updateInfoWithError(data) {
  nameEl.innerText = `The person isn't available`;
  heightEl.innerText = ``;
  massEl.innerText = ``;
  birthYearEl.innerText = ``;
}
