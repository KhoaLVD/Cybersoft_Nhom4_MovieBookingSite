import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api/customerApi";

export const postTicket = createAsyncThunk(
    "movies/postTicket",
    async (ticketInfo, thunkAPI) => {
        try {
            const response = await api.post("/QuanLyDatVe/DatVe", {
                ...ticketInfo,
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
