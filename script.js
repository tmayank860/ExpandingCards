const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClasses();
    card.classList.add("active");
    card.classList.add("flex-column");
  });
});

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
    card.classList.remove("flex-column");
  });
}

window.onload = () => {
  testmoinialsUser();
};

const testmoinialsUser = () => {
  fetch("https://randomuser.me/api/?results=4")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      showRandomUser(data);
      details();
    });
};


const showRandomUser = (randomUser) => {
    
  document.getElementById(
    "profile1"
  ).src = `${randomUser.results[0].picture.large}`;
  document.getElementById("profile1").alt= `${randomUser.results[0].picture.large}`;
  document.getElementById(
    "name1"
  ).innerText = `${randomUser.results[0].name.title} ${randomUser.results[0].name.first} ${randomUser.results[0].name.last}`;
document.getElementById("email1").innerText=`${randomUser.results[0].email}`;

  document.getElementById(
    "profile2"
  ).src = `${randomUser.results[1].picture.large}`;
  document.getElementById("profile2").alt= `${randomUser.results[1].picture.large}`;
  document.getElementById(
    "name2"
  ).innerText = `${randomUser.results[1].name.title} ${randomUser.results[1].name.first} ${randomUser.results[1].name.last}`;
document.getElementById("email2").innerText=`${randomUser.results[1].email}`;

  document.getElementById(
    "profile3"
  ).src = `${randomUser.results[2].picture.large}`;
  document.getElementById("profile3").alt= `${randomUser.results[2].picture.large}`;
  document.getElementById(
    "name3"
  ).innerText = `${randomUser.results[2].name.title} ${randomUser.results[2].name.first} ${randomUser.results[2].name.last}`;
document.getElementById("email3").innerText=`${randomUser.results[2].email}`;

  document.getElementById(
    "profile4"
  ).src = `${randomUser.results[3].picture.large}`;
  document.getElementById("profile4").alt= `${randomUser.results[3].picture.large}`;
  document.getElementById(
    "name4"
  ).innerText = `${randomUser.results[3].name.title} ${randomUser.results[3].name.first} ${randomUser.results[3].name.last}`;
document.getElementById("email4").innerText=`${randomUser.results[3].email}`;

};


