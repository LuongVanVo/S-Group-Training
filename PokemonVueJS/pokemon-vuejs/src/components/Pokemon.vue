<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { typeColors } from '@/assets/color.js'
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const limit = 500
const offset = ref(0)
const pokemonList = ref([])
const allPokemonList = ref([])
const showLoadMore = ref(true)

const checkSearch = ref(false)

const namePokemonSearch = ref('')
// Hàm để gọi API và lấy danh sách Pokémon
async function fetchPokemonData() {
    const url = `${apiUrl}?offset=${offset.value}&limit=${limit}`;
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        const pokemonListData = data.results

        
        // Lấy chi tiết pokemon và sort theo id của pokemon
        const pokemonData = pokemonListData.map(pokemon => {
            return fetch(pokemon.url)
                .then(response => response.json())
                .then(pokemonData => {
                    return { pokemon, pokemonData }
                })
            })

        const results = await Promise.all(pokemonData)
        results.sort((a, b) => a.pokemonData.id - b.pokemonData.id)
        

        allPokemonList.value = [...allPokemonList.value, ...results]
        if (namePokemonSearch.value.trim() == '') {
            // pokemonList.value = [...allPokemonList.value]
            pokemonList.value = allPokemonList.value.slice(0, 36)
        }

        offset.value += limit

        if (!data.next) {
            showLoadMore.value = false
        }
        
    }
    catch (error) {
        console.error("Lỗi trong việc lấy data từ API: ", error);
    }
}

// Hàm để xử lý sự kiện "Load More"
function loadMorePokemon() {
    const nextPokemon = allPokemonList.value.slice(pokemonList.value.length, pokemonList.value.length + 36);
    pokemonList.value = [...pokemonList.value, ...nextPokemon];

}

onMounted(() => {
    fetchPokemonData()
})

function searchPokemon() {
  const inputText = namePokemonSearch.value.toLowerCase().trim();
  if (inputText == '') {
    pokemonList.value = [...allPokemonList.value];
    showLoadMore.value = true;
  } else {
    const filteredPokemon = allPokemonList.value.filter(pokemon => 
        pokemon.pokemon.name.toLowerCase().includes(inputText)
    )
    pokemonList.value = filteredPokemon;
    showLoadMore.value = false;
    checkSearch.value = filteredPokemon.length === 0;
  }
}

watch(namePokemonSearch, searchPokemon)

//router
const router = useRouter()
const goToDetail = (pokemonId, pokemonName) => {
    router.push(`/${pokemonId}/${pokemonName}`)
}

</script>

<template>
    <!-- <router-view></router-view> -->
  <!-- SECTION 1 -->
  <div class="container">
        <div class="display-flex align-items-center justify-content-center flex-director-column">
            <div class="heading align-items-center justify-content-center display-flex">
                <h2>Pokemon API</h2>
            </div>
            <div class="search_wrap">
                <input v-model="namePokemonSearch" class="input-text" type="text" placeholder="Seach some Pokemon...">
            </div>
        </div>
        
        <div class="wrapper">
            <!-- <h1 v-if="checkSearch">No pokemon matched with "{{ namePokemonSearch }}"</h1> -->
            <div v-for="pokemon in pokemonList" :key="pokemon.pokemonData.id" class="col">
                <a @click="goToDetail(pokemon.pokemonData.id, pokemon.pokemonData.name)" class="pokemon">
                    <div class="id">#{{ pokemon.pokemonData.id }}</div>
                    <div class="image" :style="{ backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemonData.id}.png)` }"></div>
                    <h3 class="title">{{ pokemon.pokemonData.name }}</h3>
                    <div class="labels">
                        <div v-for="type in pokemon.pokemonData.types" :key="type.type.name" :class="['label']" :style="{ backgroundColor: typeColors[type.type.name]}">{{ type.type.name }}</div>
                    </div>
                </a>
            </div>
        </div>

        <div class="wrapper">
            <div class="col-full" v-show="showLoadMore">
                <button class="btn" @click="loadMorePokemon">Load More</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    color: #2c3e50;
    background: #ffffff;
    transition: color .5s, background-color .5s;
    line-height: 1.6;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 15px;
}

.container {
    max-width: 1200px;
    margin: 50px auto;
}
.heading {
    font-size: 25px;
    margin-bottom: 50px;
}

.input-text {
    outline: 1px solid #00000036;
    border-radius: 30px;
    border: none;
    font-size: 16px;
    padding: 20px;
    width: 100%;
    box-shadow: 0 7px 29px #64646f33;
    /* box-sizing: border-box; */
}
.search_wrap {
    margin: 0 15px 50px;
    max-width: 500px;
    width: 100%;
}
h2 {
    font-weight: 400;
    font-size: 30px;
}

.justify-content-center {
    justify-content: center;
}

.align-items-center {
    align-items: center;
}

.display-flex {
    display: flex;
}

.flex-director-column {
    flex-direction: column;
}

* {
    box-sizing: border-box;
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
}

.col {
    --width: 50%;
    --offset: 10px;
    max-width: calc(var(--width) - calc(var(--offset)));
    flex-basis: calc(var(--width) - calc(var(--offset)));
    margin: 0 calc(var(--offset) / 2);
    margin-bottom: var(--offset);
    border-radius: 15px !important;
    box-shadow: #0000001a 0 4px 12px;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    transform: translateZ(0);
}

.col:hover {
    box-shadow: 0 5px 11px #0000002e,0 4px 15px #00000026;
    transition: box-shadow .4s ease-out
}

.pokemon {
    cursor: pointer;
    display: block;
    padding: 10px 5px;
    border-radius: 15px;
}

a {
    text-decoration: none;
    color: #000;
    transition: 0.4s;
}

.id {
    text-align: center;
    color: #2c3e50;
}

.image {
    padding-top: 100%;
    background-size: contain;
}

.title {
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
}

.labels {
    display: flex;
    justify-content: center;
}

.label {
    padding: 3px 4px;
    border-radius: 5px;
    margin: 0 3px;
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    box-shadow: #0000000d 0 6px 24px, #00000014 0 0 0 1px;
}

.shadow {
    background-color: #735797
}

.col-full {
    padding-top: 50px;
    width: 100%;
    text-align: center;
}

.btn {
    cursor: pointer;
    padding: 20px 25px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #ff4d4f;
    transition: all .25s cubic-bezier(.02,.01,.47,1);
}

.btn:hover {
    background-color: #ff7875
}

.btn:active {
    background-color: #d9363e
}

@media (min-width: 768px) {
    .col {
        --width: 33.33%;
        --offset: 10px
    }
}

@media (min-width: 960px) {
    .col {
        --width: 25%;
        --offset: 10px
    }
}

@media (min-width: 1200px) {
    .col {
        --width: 16.66%;
        --offset: 10px
    }
}

</style>
