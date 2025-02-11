const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const limit = 36;  // Số lượng Pokémon mỗi lần tải
let offset = 0;    // Bắt đầu từ Pokémon đầu tiên

// Hàm để gọi API và lấy danh sách Pokémon
function fetchPokemonData() {
  const url = `${apiUrl}?offset=${offset}&limit=${limit}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Lấy phần tử container từ DOM
      const pokemonContainer = document.querySelector('.wrapper');
      
      // Lấy danh sách Pokémon và sắp xếp theo ID từ bé đến lớn
      const pokemonList = data.results;

      pokemonList.sort((a, b) => {
        const idA = a.url.split('/')[6]; // Lấy ID từ URL
        const idB = b.url.split('/')[6];
        return parseInt(idA) - parseInt(idB); // Sắp xếp từ bé đến lớn
      });

      // Lặp qua danh sách Pokémon và thêm vào DOM
      pokemonList.forEach(pokemon => {
        // Gọi API chi tiết cho từng Pokémon
        fetch(pokemon.url)
          .then(response => response.json())
          .then(pokemonData => {
            // Tạo phần tử col cho mỗi Pokémon
            const colDiv = document.createElement('div');
            colDiv.classList.add('col');

            // Tạo phần tử a cho Pokémon và thêm các lớp 'pokemon'
            const pokemonLink = document.createElement('a');
            pokemonLink.href = pokemon.url;
            pokemonLink.classList.add('pokemon');

            // Tạo phần tử id
            const idDiv = document.createElement('div');
            idDiv.classList.add('id');
            idDiv.textContent = `#${pokemonData.id}`;

            // Tạo phần tử image (Giả sử bạn có ảnh Pokémon từ URL)
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('image');
            imageDiv.style.backgroundImage = `url(${pokemonData.sprites.front_default})`;

            // Tạo phần tử title
            const title = document.createElement('h3');
            title.classList.add('title');
            title.textContent = pokemon.name;

            // Tạo phần tử labels
            const labelsDiv = document.createElement('div');
            labelsDiv.classList.add('labels');

            // Lặp qua các loại của Pokémon và tạo các label
            pokemonData.types.forEach(type => {
              const label = document.createElement('div');
              label.classList.add('label', type.type.name);  // Tạo lớp cho từng loại
              label.textContent = type.type.name;
              labelsDiv.appendChild(label);
            });

            // Thêm các phần tử vào pokemonLink
            pokemonLink.appendChild(idDiv);
            pokemonLink.appendChild(imageDiv);
            pokemonLink.appendChild(title);
            pokemonLink.appendChild(labelsDiv);

            // Thêm pokemonLink vào colDiv
            colDiv.appendChild(pokemonLink);

            // Thêm colDiv vào container
            pokemonContainer.appendChild(colDiv);
          })
          .catch(error => console.error('Lỗi khi lấy chi tiết Pokémon:', error));
      });

      // Cập nhật offset để tải Pokémon tiếp theo
      offset += limit;

      // Nếu không còn Pokémon để tải thêm, ẩn nút "Load More"
      if (!data.next) {
        document.getElementById('load-more').style.display = 'none';
      }
    })
    .catch(error => console.error('Lỗi khi gọi API:', error));
}

// Hàm để xử lý sự kiện "Load More"
function loadMorePokemon() {
  fetchPokemonData();  // Gọi API để lấy Pokémon mới
}

// Tạo nút "Load More"
// const loadMoreButton = document.createElement('button');
// loadMoreButton.id = 'load-more';
// loadMoreButton.textContent = 'Load More';
// loadMoreButton.onclick = loadMorePokemon;
// document.body.appendChild(loadMoreButton);  // Thêm nút vào trang

// Gọi hàm lần đầu tiên để tải Pokémon ban đầu
fetchPokemonData();

