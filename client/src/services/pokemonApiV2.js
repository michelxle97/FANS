const POKE_API_URL = "https://pokeapi.co/api/v2"

export async function getPokemonById(pokeId) {
  const response = await fetch(`${POKE_API_URL}/pokemon/${pokeId}`);

  fetch(`${POKE_API_URL}/pokemon/${pokeId}`, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject('Pokemon not found');
  }
}

export async function getPokemonByType(typeId) {
  const response = await fetch(`${POKE_API_URL}/type/${typeId}`);

  fetch(`${POKE_API_URL}/pokemon/`, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject('Pokemon not found');
  }
}
