import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from '../configApi/api'

export const getAllMovies = createAsyncThunk('/movies', async (_, thunkApi) => {
    try {
        const response = await api.get(`/movies`);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const deleteMovie = createAsyncThunk('/movies/:id', async ({ id }, thunkApi) => {
    try {
        const response = await api.delete(`/movies/${id}`);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const addMovie = createAsyncThunk('/movies/add', async (newMovie, thunkApi) => {
    try {
        console.log(newMovie);
        const response = await api.post(`/movies/add`, newMovie);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }

})