import { createSlice } from "@reduxjs/toolkit";
import { addMovie, deleteMovie, editMovie, getAllMovies } from "./thunk";

const slice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        allMovies: [],
        favorites: [],
        isLoading: false,
        isError: null,
        loadMore: true,
    },
    reducers: {
        setLoadMore: (state, { payload }) => {
            state.loadMore = payload;
        },
        setFavorites: (state, { payload }) => {
            state.favorites = [...state.favorites, payload];
        },
        removeFavorites: (state, { payload }) => {
            state.favorites = state.favorites.filter(({ _id }) => _id !== payload)
        },
    },

    extraReducers: builder => {
        builder
            .addCase(getAllMovies.fulfilled, (state, { payload }) => {
                state.allMovies = payload;
                state.isLoading = false;
            })
            .addCase(getAllMovies.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllMovies.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = payload;
            })
            .addCase(deleteMovie.fulfilled, (state, { payload }) => {
                state.allMovies = state.allMovies.filter(movie => movie._id !== payload._id);
                state.isLoading = false;
                state.favorites = state.favorites.filter(movie => movie._id !== payload._id);
            })
            .addCase(deleteMovie.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteMovie.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = payload;
            })
            .addCase(addMovie.fulfilled, (state, { payload }) => {
                state.allMovies = state.allMovies.push(payload);
                state.isLoading = false;
            })
            .addCase(addMovie.pending, state => {
                state.isLoading = true;
            })
            .addCase(addMovie.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = payload;
            })
            .addCase(editMovie.fulfilled, (state, { payload }) => {
                state.allMovies = state.allMovies.map((movie) =>
                    movie._id === payload._id ? payload : movie
                );
                state.isLoading = false;
            })
            .addCase(editMovie.pending, state => {
                state.isLoading = true;
            })
            .addCase(editMovie.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = payload;
            })
    }
})
export const { setLoadMore, setFavorites, removeFavorites } = slice.actions
export const rootReducer = slice.reducer