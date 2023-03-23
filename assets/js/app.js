const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se corrigen los selectores del query 
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// Se añade la funcion async
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = fetch(`${usersEndpoint}/${username}`);
  // Se agrega la constante data y tambien se transforman los datos a un JSON.
  const data = await response.json();
  console.log(data);

  // Correccion de backticks.
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);