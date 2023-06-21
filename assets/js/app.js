//Creamos la constante baseEndpoint que es el link de la API de github
const baseEndpoint = 'https://api.github.com';
//Creamos la constante userEndpoint que con plantillas literales nos lleva al link de users de la API de github
const usersEndpoint = `${baseEndpoint}/users`;

//Creas unas variables
const $n = document.querySelector('.name'); //Faltaba el selector "." antes de name
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');


async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); /* Nos marcaba el error en await porque solo se usa para asincronos entonces agregamos async a la funcion de la linea 7 y se arregla el primer error*/ 
  console.log(data);
  //El error de estas es que usaban comillas solos en vez de backticks
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;// Marcaba error en esta linea y era porque en la linea 6 el querySelector de name no tenia el selector . antes de name. (tener más percepcion al detalle)
}

displayUser('stolinski').catch(handleError);