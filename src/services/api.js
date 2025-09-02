const BASE_URL= " https://openlibrary.org/search.json";

export const searchBooks = async (query) => {
    const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`)
    const data = await response.json();
    console.log(data.docs)
    return data.docs;
}