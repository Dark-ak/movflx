import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/"

const headers = {
    'Content-Type': "application/json",
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDViZmU5YjcxMzk0YmFkOGFkOTFmZjM4OTllN2Y4NiIsInN1YiI6IjY1MjY3MTIzZmQ2MzAwNWQ3OGQ3NmNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3bpviTYp1jQVYh6Vtf9VpusXZ6-frWR4VE-ELRBnkn4'
}

const discover = (type, genre) => {
    const request = axios.get(`${baseUrl}/discover/${type}/?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`, {headers:headers})
    return request.then(response => response.data)
}

const trending = (type) => {
    const request = axios.get(`${baseUrl}/trending/${type}/day?language=en-US`, {headers:headers})
    return request.then(response => response.data)
}

const find = (type,id) => {
    const request = axios.get(`${baseUrl}/${type}/${id}`, {headers:headers})
    return request.then(response => response)
}

export default { discover, trending, find }