// import React from 'react';
import axios from 'axios';

 const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJjZmE2MzcxZjJiNGM1MWE4ZGJiNjc0ZGJhMmJkMyIsInN1YiI6IjYwYmNiYzNmZWE4NGM3MDAyYWU3YTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anozZCItdqcbHyQtoH8Fm8ne3QlJGCSzSiJGIz6YtsQ';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3';
    axios.defaults.headers.common.Authorization = AUTH_TOKEN;
    
export async function fetcReviews (movieId)  {
     try {
        const response = await axios.get(`/movie/${movieId}/reviews?api_key=AUTH_TOKEN&language=en-US`);
        return response.data.results;
    
     } catch (error) {
         alert(error.massage)
    
    }
};

export async function fetcCastsId (movieId)  {
       try {
    const response = await axios.get(`/movie/${ movieId }/credits?api_key=AUTH_TOKEN&language=en-US`);
    return response.data.cast;
     } catch (error) {
     alert(error.massage)
    }
};

export async function fetchMoviesId  (movieId){
try {
    const response = await axios.get(`/movie/${ movieId }?api_key=AUTH_TOKEN&language=en-US`);
    return response.data;
} catch (error) {
     alert(error.massage)
    }
};

export async function getPopularMovies(){
try {
    const response = await axios.get(`/trending/movie/day?`);
    return response.data.results;
} catch (error) {
    alert(error.massage)
}
};
 
export async function fetchMoviesSearch(submitValue) {
try {
    const response = await axios.get(`/search/movie?api_key=AUTH_TOKEN&language=en-US&query=${ submitValue }&page=1&include_adult=false`);
    return response.data.results;
} catch (error) {
    alert(error.massage)
}
};