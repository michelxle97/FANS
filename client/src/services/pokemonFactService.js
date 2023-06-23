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