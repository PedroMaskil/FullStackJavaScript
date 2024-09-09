const filterElement = document.querySelector('main input'); // Pega o input que está na Main
const genreFilter = document.getElementById('genero'); // Selecionando o dropdown de gênero
const list = document.querySelectorAll('.songs li');  // cria a variavel em todos os LI que estão na classe .songs


filterElement.addEventListener('input', filterSongs); // Filtrando as musicas Pelo Evento
genreFilter.addEventListener('change', filterSongs); // Fazendo o mesmo com o dropdown

function filterSongs() { 
  const filterValue = filterElement.value.toLowerCase();
  const selectedGenre = genreFilter.value; // Obtém o gênero selecionado

  for (let song of list) {
    let pesquisa = song.querySelector('p').textContent.toLowerCase();
    let songGenre = song.getAttribute('data-genero'); // Obtém o gênero da música

    // Verifica se o texto da pesquisa está incluído no título da música e se o gênero corresponde
    if ((filterValue === '' || pesquisa.includes(filterValue)) && (selectedGenre === '' || songGenre === selectedGenre)) {
      song.style.display = "block"; // Exibe a música se passar pelos dois filtros
    } else {
      song.style.display = "none"; // Oculta a música se não passar no filtro
    }
  }
}

