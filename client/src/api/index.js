import axios from "axios";

const token = localStorage.getItem('profile');

const API = axios.create({ 
    baseURL: 'https://roovie.herokuapp.com',
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
});

export const SendMail = (newsletterData) => API.post('/mail/newsletter', newsletterData);

export const Login = (formData) => API.post('/user/login', formData);
export const Register = (formData) => API.post('/user/register', formData);
export const UpdateUserProfile = (id, userData) => API.patch(`/user/${id}`, userData);

export const CreateRequest = (form) => API.post('/request/create', form);

export const FetchMovie = (id) => API.get(`/movie/${id}`);
export const FetchPreview = (page) => API.get(`/movie/preview?page=${page}`);
export const FetchAllMovies = () => API.get(`/movie/fetch`);
export const FetchLimitedMovies = (page) => API.get(`/movie/fetchLimited?page=${page}`);
export const FetchMoviesBySearch = (searchQuery) => API.get(`/movie/search?search=${searchQuery.search || 'none'}&genre=${searchQuery.genre || 'none'}&year=${searchQuery.year}&rating=${searchQuery.rating}`);
export const FindMovies = (searchQuery) => API.get(`/movie/find?search=${searchQuery.search || 'none'}&genre=${searchQuery.genre || 'none'}`);
export const LikeMovie = (id) => API.patch(`/movie/${id}/like`);
export const PostReview = (value, id) => API.post(`/movie/${id}/review`, { value });

export default API;