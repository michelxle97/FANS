const BASE_URL = "/api/pokemon_fact";

export async function fetchFactById(factId) {
  try {
    const response = await fetch(`${BASE_URL}/${factId}`);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Pokemon fact not found');
    }
  } catch (error) {
    console.error('Error fetching Pokemon fact by ID:', error);
    throw error;
  }
}

export async function fetchFactByTypeName(typeName) {
  try {
    const response = await fetch(`${BASE_URL}/fact-type-name/${typeName}`);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Pokemon fact not found');
    }
  } catch (error) {
    console.error('Error fetching Pokemon fact by type name:', error);
    throw error;
  }

}

const POKE_API_URL = "http://localhost:8080/api/pokemon_type/type-name"
const POKE_FACT_URL = "http://localhost:8080/api/pokemon_fact"


export async function getTypeInfo(type) {
  const response = await fetch(`${POKE_API_URL}/${type}`);

  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject('Pokemon not found');
  }
}

export async function getTypeDescription(id) {
    const response = await fetch(`${POKE_FACT_URL}/${id}`);
    if(response.status === 200) {
        return response.json();
    } else {
        return Promise.reject('error');
    }

}
