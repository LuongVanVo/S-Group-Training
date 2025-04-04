const pokemon = [
    {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/'
    },
    {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/'
    },
    {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/'
    },
    {
        name: 'charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/'
    },
    {
        name: 'charmeleon',
        url: 'https://pokeapi.co/api/v2/pokemon/5/'
    },
    {
        name: 'charizard',
        url: 'https://pokeapi.co/api/v2/pokemon/6/'
    },
    {
        name: 'squirtle',
        url: 'https://pokeapi.co/api/v2/pokemon/7/'
    },
    {
        name: 'wartortle',
        url: 'https://pokeapi.co/api/v2/pokemon/8/'
    },
    {
        name: 'blastoise',
        url: 'https://pokeapi.co/api/v2/pokemon/9/'
    },
    {
        name: 'caterpie',
        url: 'https://pokeapi.co/api/v2/pokemon/10/'
    },
    {
        name: 'metapod',
        url: 'https://pokeapi.co/api/v2/pokemon/11/'
    },
    {
        name: 'butterfree',
        url: 'https://pokeapi.co/api/v2/pokemon/12/'
    },
    {
        name: 'weedle',
        url: 'https://pokeapi.co/api/v2/pokemon/13/'
    },
    {
        name: 'kakuna',
        url: 'https://pokeapi.co/api/v2/pokemon/14/'
    },
    {
        name: 'beedrill',
        url: 'https://pokeapi.co/api/v2/pokemon/15/'
    },
    {
        name: 'pidgey',
        url: 'https://pokeapi.co/api/v2/pokemon/16/'
    },
    {
        name: 'pidgeotto',
        url: 'https://pokeapi.co/api/v2/pokemon/17/'
    },
    {
        name: 'pidgeot',
        url: 'https://pokeapi.co/api/v2/pokemon/18/'
    },
    {
        name: 'rattata',
        url: 'https://pokeapi.co/api/v2/pokemon/19/'
    },
    {
        name: 'raticate',
        url: 'https://pokeapi.co/api/v2/pokemon/20/'
    },
    {
        name: 'spearow',
        url: 'https://pokeapi.co/api/v2/pokemon/21/'
    },
    {
        name: 'fearow',
        url: 'https://pokeapi.co/api/v2/pokemon/22/'
    },
    {
        name: 'ekans',
        url: 'https://pokeapi.co/api/v2/pokemon/23/'
    },
    {
        name: 'arbok',
        url: 'https://pokeapi.co/api/v2/pokemon/24/'
    },
    {
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon/25/'
    },
    {
        name: 'raichu',
        url: 'https://pokeapi.co/api/v2/pokemon/26/'
    },
    {
        name: 'sandshrew',
        url: 'https://pokeapi.co/api/v2/pokemon/27/'
    },
    {
        name: 'sandslash',
        url: 'https://pokeapi.co/api/v2/pokemon/28/'
    },
    {
        name: 'nidoran-f',
        url: 'https://pokeapi.co/api/v2/pokemon/29/'
    },
    {
        name: 'nidorina',
        url: 'https://pokeapi.co/api/v2/pokemon/30/'
    },
    {
        name: 'nidoqueen',
        url: 'https://pokeapi.co/api/v2/pokemon/31/'
    },
    {
        name: 'nidoran-m',
        url: 'https://pokeapi.co/api/v2/pokemon/32/'
    },
    {
        name: 'nidorino',
        url: 'https://pokeapi.co/api/v2/pokemon/33/'
    },
    {
        name: 'nidoking',
        url: 'https://pokeapi.co/api/v2/pokemon/34/'
    },
    {
        name: 'clefairy',
        url: 'https://pokeapi.co/api/v2/pokemon/35/'
    },
    {
        name: 'clefable',
        url: 'https://pokeapi.co/api/v2/pokemon/36/'
    },
    {
        name: 'vulpix',
        url: 'https://pokeapi.co/api/v2/pokemon/37/'
    },
    {
        name: 'ninetales',
        url: 'https://pokeapi.co/api/v2/pokemon/38/'
    },
    {
        name: 'jigglypuff',
        url: 'https://pokeapi.co/api/v2/pokemon/39/'
    },
    {
        name: 'wigglytuff',
        url: 'https://pokeapi.co/api/v2/pokemon/40/'
    },
    {
        name: 'zubat',
        url: 'https://pokeapi.co/api/v2/pokemon/41/'
    },
    {
        name: 'golbat',
        url: 'https://pokeapi.co/api/v2/pokemon/42/'
    },
    {
        name: 'oddish',
        url: 'https://pokeapi.co/api/v2/pokemon/43/'
    },
    {
        name: 'gloom',
        url: 'https://pokeapi.co/api/v2/pokemon/44/'
    },
    {
        name: 'vileplume',
        url: 'https://pokeapi.co/api/v2/pokemon/45/'
    },
    {
        name: 'paras',
        url: 'https://pokeapi.co/api/v2/pokemon/46/'
    },
    {
        name: 'parasect',
        url: 'https://pokeapi.co/api/v2/pokemon/47/'
    },
    {
        name: 'venonat',
        url: 'https://pokeapi.co/api/v2/pokemon/48/'
    },
    {
        name: 'venomoth',
        url: 'https://pokeapi.co/api/v2/pokemon/49/'
    },
    {
        name: 'diglett',
        url: 'https://pokeapi.co/api/v2/pokemon/50/'
    },
    {
        name: 'dugtrio',
        url: 'https://pokeapi.co/api/v2/pokemon/51/'
    },
    {
        name: 'meowth',
        url: 'https://pokeapi.co/api/v2/pokemon/52/'
    },
    {
        name: 'persian',
        url: 'https://pokeapi.co/api/v2/pokemon/53/'
    },
    {
        name: 'psyduck',
        url: 'https://pokeapi.co/api/v2/pokemon/54/'
    },
    {
        name: 'golduck',
        url: 'https://pokeapi.co/api/v2/pokemon/55/'
    },
    {
        name: 'mankey',
        url: 'https://pokeapi.co/api/v2/pokemon/56/'
    },
    {
        name: 'primeape',
        url: 'https://pokeapi.co/api/v2/pokemon/57/'
    },
    {
        name: 'growlithe',
        url: 'https://pokeapi.co/api/v2/pokemon/58/'
    },
    {
        name: 'arcanine',
        url: 'https://pokeapi.co/api/v2/pokemon/59/'
    },
    {
        name: 'poliwag',
        url: 'https://pokeapi.co/api/v2/pokemon/60/'
    },
    {
        name: 'poliwhirl',
        url: 'https://pokeapi.co/api/v2/pokemon/61/'
    }
];

const buttonClick = document.querySelector('button');
let pokemonAppear
function createPokemon() {
    const containerPokemon = document.querySelector('.pokemon-container');
    const input = document.querySelector('.input-number-pokemon');
    const soLuongPokemon = parseInt(input.value);

    if (pokemonAppear) {
        clearInterval(pokemonAppear);
        pokemonAppear = null;
    }

    containerPokemon.innerHTML = '';
    if (soLuongPokemon > 0) {
        containerPokemon.style.display = 'inline-flex';
    } else {
        containerPokemon.style.display = 'none'
    }
    for (let i = 0; i < soLuongPokemon; i++) {
        if (i < pokemon.length) {
            const selectPokemon = pokemon[i];
            const pokemonDiv = document.createElement('div');
            pokemonDiv.classList.add('pokemon')
            const pokemonName = document.createElement('h2');
            const pokemonImg = document.createElement('img');
            pokemonName.innerText = selectPokemon.name;
            // trong mảng pokemon, chia chuỗi url thành mảng, lấy phần tử thứ 2 từ cuối lên  => chính là số của pokemon
            pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectPokemon.url.split('/').slice(-2, -1)}.png`;
            pokemonImg.alt = selectPokemon.name;
        
            pokemonDiv.appendChild(pokemonImg); 
            pokemonDiv.appendChild(pokemonName);    
            containerPokemon.appendChild(pokemonDiv);
        }
    }
}

// setInteval()
function createPokemon_1()
{
    const containerPokemon = document.querySelector('.pokemon-container');
    
    containerPokemon.innerHTML = '';
    let index = 0
    pokemonAppear = setInterval(() => {
        if (index < pokemon.length) {
            const selectPokemon = pokemon[index];
            const pokemonDiv = document.createElement('div')
            pokemonDiv.classList.add('pokemon')
            const pokemonName = document.createElement('h2')
            pokemonName.innerText = selectPokemon.name
            const pokemonImg = document.createElement('img')
            pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectPokemon.url.split('/').slice(-2, -1)[0]}.png`
            pokemonImg.alt = selectPokemon.name

            pokemonDiv.appendChild(pokemonImg)
            pokemonDiv.appendChild(pokemonName)
            containerPokemon.appendChild(pokemonDiv)
            index++
        } else {
            clearInterval(pokemonAppear)
            pokemonAppear = null
        }
    }, 1000)
}

buttonClick.onclick = function() {
    const input = document.querySelector('.input-number-pokemon');
    const soLuongPokemon = parseInt(input.value);

    if (isNaN(soLuongPokemon) || soLuongPokemon <= 0) {
        createPokemon_1()
    } else {
        createPokemon()
    }
}