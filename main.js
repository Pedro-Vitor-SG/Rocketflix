import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";
const movie = {
  id: 1958,
  img: ``,
  title: ``,
  description: ``,
};

const getMovie = async () => {
  const random = Math.floor(Math.random() * 3000);
  console.log(random);
  movie.id = random;
  //URL COMPLETA (base, id do filme, chave api e idioma)

  const url = `${BASE_URL}${movie.id}?${API_KEY}&${language}`;

  const res = await fetch(url);
  console.log(res);
  //JSON COM OS DADOS QUE VEM DA API
  const data = await res.json();

  console.log(url);
  console.log(data);

  movie.img = `${IMG_URL}${data.poster_path}`;
  movie.title = data.title;
  movie.description = data.overview;
  document.querySelector(".main").classList.add("new-height");

  if (data.success === false) {
    console.log("Não achou o filme");

    document.querySelector("#view-movie").classList.add("not-found");
    document
      .querySelector("#img-movie")
      .setAttribute("src", "/assets/not-found-movie.png");
    document
      .querySelector("#img-movie")
      .setAttribute("alt", `Poster para filme não encontrado`);
    document.querySelector("#title-movie").innerHTML =
      "Ops, hoje não é dia de assistir filme. Bora codar! 🚀";

    document.querySelector("#overview-movie").style.display = "none";
  } else {
    console.log("achou");

    document.querySelector("#view-movie").classList.remove("not-found");

    document.querySelector("#img-movie").setAttribute("src", movie.img);
    document
      .querySelector("#img-movie")
      .setAttribute("alt", `Poster do Filme: ${movie.title}`);
    document.querySelector("#title-movie").innerHTML = movie.title;
    document.querySelector("#overview-movie").style.display = "block";
    document.querySelector("#overview-movie").innerHTML = movie.description;
    document.querySelector("#overview-movie").style.display = "-webkit-box";

    document.querySelector("#view-movie").style.display = "flex";
  }
};

document.querySelector("#btn-query").addEventListener("click", getMovie);
