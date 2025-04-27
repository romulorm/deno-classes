async function consulta_universidades(country:string) {
  try {
    const api_address = `http://universities.hipolabs.com/search?country=${country}`;
    const api_response = await fetch(api_address);
    const api_data = await api_response.json();
    console.log(api_data);
  } catch (error) {
    console.log(error);
  }
}

consulta_universidades("Brazil");