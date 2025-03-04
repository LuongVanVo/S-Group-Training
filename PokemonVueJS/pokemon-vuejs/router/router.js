import { createRouter, createWebHistory } from "vue-router";
import Pokemon from "../src/components/Pokemon.vue"
import DetailsPokemon from "../src/components/DetailsPokemon.vue"
const routes = [
    {
        path: '/',
        name: 'pokemonList',
        component: Pokemon
    },
    {
        path: '/:pokemonId/:pokemonName',
        name: 'DetailsPokemon',
        component: DetailsPokemon,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router