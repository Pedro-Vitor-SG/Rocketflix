import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

// const url = `${BASE_URL}02?${API_KEY}`

// console.log(API_KEY, BASE_URL)

// const  getMovie = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data)
// }
// getMovie(url)

const movie = {
  id: 1858,
  img: ``,
  title: ``,
  description: ``,
};

const getMovie = async () => {
  //URL COMPLETA (base, id do filme, chave api e idioma)

  const url = `${BASE_URL}${movie.id}?${API_KEY}&${language}`;


  const res = await fetch(url);
  console.log(res)
  //JSON COM OS DADOS QUE VEM DA API
  const data = await res.json();

  console.log(url);
  console.log(data);

  movie.img = `${IMG_URL}${data.poster_path}`;
  movie.title = data.title;
  movie.description = data.overview;

  document.querySelector("#img-movie").setAttribute("src", movie.img);
  document.querySelector("#title-movie").innerHTML = movie.title;
  document.querySelector("#overview-movie").innerHTML = movie.description;

  document.querySelector('#view-movie').style.display = 'block'
};

document.querySelector('#btn-query').addEventListener('click', getMovie)

