<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { defineProps } from 'vue'
import { typeColors } from '@/assets/color.js'
const route = useRoute()
const pokemonId = route.params.pokemonId
console.log(pokemonId)

const pokemonDetail = ref({})

async function fetchPokemonDetail() {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const primaryType = data.types?.[0]?.type?.name

    const speciesUrl = data.species.url
    const speciesResponse = await fetch(speciesUrl)
    const speciesData = await speciesResponse.json()

    const flavorTextEntries = speciesData.flavor_text_entries

    pokemonDetail.value = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types,
      flavor_text_entries: flavorTextEntries,
      abilities: data.abilities,
      color: typeColors[primaryType],
      stats: data.stats,
    }
    console.log(pokemonDetail.value);
    
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu chi tiết Pokémon:', error);
  }
}

onMounted(() => {
    fetchPokemonDetail()
})

const getAbbreviatedStatName = (statName) => {
  const statMapping = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SPA',
    'special-defense': 'SPD',
    speed: 'SPD'
  };
  return statMapping[statName] || statName.toUpperCase();
}

// Lấy chuỗi tiến hóa của pokemon
// async function fetchEvolutionChain() {
//     const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonDetail.value.id}`
//     try {
//         const response = await fetch(apiUrl)
//         const data = await response.json()

//         // lay id cua chuoi tien hoa
//         const evolutionChainUrl = data.species.url
//         const speciesResponse = await fetch(evolutionChainUrl)
//         const speciesData = await speciesResponse.json()
//         const evolutionChainId = speciesData.evolution_chain.url.split('/')[6]

//         // lay thong tin cua chuoi tien hoa
//         const evolutionUrl = `https://pokeapi.co/api/v2/evolution-chain/${evolutionChainId}/`
//         const evolutionResponse = await fetch(evolutionUrl)
//         const evolutionData = await evolutionResponse.json()

//         // lay thong tin cua pokemon trong chuoi tien hoa
//         const evolutionChain = evolutionData.chain
//         const evolutionStages = []
//         let currentStage = evolutionChain

//         while(currentStage) {
//             const stageData = {
//                 name: currentStage.species.name,
//                 imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentStage.species.name}.png`
//             }
//             evolutionStages.push(stageData)
//             currentStage = currentStage.evolves_to[0] // chuyen sang giai doan tiep theo
//         }
//         console.log(evolutionStages)
//         return evolutionStages
//     }
//     catch (error) {
//         console.error('Lỗi khi lấy dữ liệu chuỗi tiến hóa:', error)
//     }
// }

// onMounted(async () => {
//   if (pokemonDetail.value.id) {
//     const evolutionData = await fetchEvolutionChain(pokemonDetail)
//     pokemonDetail.value.evolutionStages = evolutionData
//   }
// })

</script>

<template>
    <div class="container-detail">
        <div class="content">
            <div class="button-back">
                <router-link to="/"> < Back</router-link>
            </div>

            <div class="wrapper">
                <div class="col-full">
                    <div class="image" :style="{ backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetail.id}.png)` }"></div>
                    <div class="labels">
                        <div v-for="type in pokemonDetail.types" :key="type.type.name" :style="{ backgroundColor: typeColors[type.type.name] }" :class="['label', type.type.name]">
                            {{ type.type.name }}
                        </div>
                    </div>
                    <h2 class="name">{{ pokemonDetail.name }}</h2>
                    <p class="entry">{{ pokemonDetail.flavor_text_entries?.[0]?.flavor_text || 'No description available.' }}</p>
                    <div class="detail-wrap">
                        <div>
                            <h3 class="label">Height</h3>
                            <div class="detail-tag">{{ pokemonDetail.height }}</div>
                        </div>
                        <div>
                            <h3 class="label">Weight</h3>
                            <div class="detail-tag">{{ pokemonDetail.weight }}</div>
                        </div>
                    </div>
                    <div class="ability">
                        <h3 class="label detail-wrap">Abilities</h3>
                        <div :class="[ 'detail-wrap', 'detail-tag', item.ability.name]" v-for="item in pokemonDetail.abilities" :key="item.ability.name"> {{ item.ability.name }}</div>
                    </div>
                    <div class="stats">
                        <h3 class="label">Stats</h3>
                        <div class="detail-wrap">
                            <div class="tag" v-for="stat in pokemonDetail.stats" :key="stat.stat.name">
                                <div :class="['tag-label', stat.stat.name.toUpperCase()]">{{ getAbbreviatedStatName(stat.stat.name) }}</div>
                                <div class="tag-detail">{{ stat.base_stat }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="evolution">
                        <!-- <h3 class="label">Evolution</h3>
                        <div class="evolution-wrap" v-for="evolution in fetchEvolutionChain(pokemonDetail.id)" :key="evolution.name">
                            <div class="evolution">
                                <div class="form">
                                    <h4 class="name">{{ evolution.name }}</h4>
                                    <img :src="evolution.imageUrl" :alt="evolution.name" />
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-detail {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    height: 100vh;
    /* background-color: #f5f5f5; */
    width: 100%;
}

.content {
    margin: 50px auto;
}

.button-back {
    display: block;
    position: fixed;
    top: 5%;
    left: 5%;
    border-radius: 30px;
    padding: 5px 10px;
    box-shadow: #63636333 0 4px 8px;
    z-index: 999;
}

.button-back a {
    border: none;
    cursor: pointer;
    text-decoration: none;
    color: #000;
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
}

.col-full {
    max-width: 500px;
    width: 100%;    
    margin: auto;
}

.image {
    width: 200px;
    height: 200px;
    margin: auto;
    background-size: cover;
    /* background-image: url; */
}
.labels {
    display: flex;
    justify-content: center;
}

.label {
    font-weight: 600;
    text-align: center;
    margin-bottom: 5px;
    padding: 3px 4px;
    border-radius: 5px;
    margin: 0 3px;
    font-size: 16px;
    text-transform: capitalize;
}

h3 {
    font-weight: 600;
}
.grass {
    background-color: #78cd54;
}

.poison {
    background-color: #b97fc9;
}

.name {
    white-space: nowrap;
    font-weight: 700;
    text-align: center;
    text-transform: capitalize;
}

.entry {
    margin-bottom: 10px;
    text-align: center;
}

.detail-wrap {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5px;
    gap: 25px;
}

.detail-tag {
    width: 100px;
    margin: 5px;
    padding: 2px;
    border-radius: 30px;
    background-color: #f6f8fc;
    text-align: center;
    text-transform: capitalize;
}

.tag {
    margin: 5px;
    padding: 5px;
    background-color: #f6f8fc;
    border-radius: 30px;
    box-shadow: #63636333 0 2px 8px;
}

.tag-label {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
}

.tag-detail {
    text-align: center;   
    margin-top: 5px;
}

.HP {
    background-color: #df2140;
}

.ATTACK {
    background-color: #ff994d;
}

.DEFENSE  {
    background-color: #eecd3d;
}

.SPECIAL-ATTACK  {
    background-color: #85ddff;
}

.SPECIAL-DEFENSE {
    background-color: #96da83;
}

.SPEED {
    background-color: #fb94a8;
}

.evolution-wrap {
    display: flex;
    justify-content: center;
}

.evolution {
    display: flex;
    justify-content: center;
}
</style>