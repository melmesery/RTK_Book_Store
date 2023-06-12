import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("https://rtk-api-test.vercel.app/book");
      return response.data.books;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBook = createAsyncThunk(
  "book/addBook",
  async (bookData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      bookData.author = getState().auth.name;
      const response = await fetch("https://rtk-api-test.vercel.app/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      return data.book;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const readBook = createAsyncThunk(
  "book/readBook",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        `https://rtk-api-test.vercel.app/book/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data.book;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`https://rtk-api-test.vercel.app/book/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const BookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLoading: false, error: null, bookInfo: null }, 
  extraReducers: (builder) => {
    builder
      //get all books
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //add book
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // read book
      .addCase(readBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(readBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookInfo = action.payload;
      })
      .addCase(readBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //delete book
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = state.books.filter((book) => book._id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default BookSlice.reducer;
