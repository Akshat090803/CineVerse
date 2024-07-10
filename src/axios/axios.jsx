import axios from "axios"


const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGRmYjBjYTMwM2E4ZTFjNjNmYmY4NDNjNGRkZTBmMiIsIm5iZiI6MTcyMDA5MzE0Ni44NTU1MzEsInN1YiI6IjY2ODY4Nzk4YTQ5MTkwNzY3OTQyYTA4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pgtCWZLQ046SWqb1N1QikpdKRk2x0rGeKbdWuSK6dLY',

    'Content-Type': 'application/json'
  
  }
});

export default axiosInstance