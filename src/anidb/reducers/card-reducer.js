import { createSlice } from "@reduxjs/toolkit";
import cardArray from "../data/cards.json";

const cardSlice = createSlice({
                                 name: "card",
                                 initialState: cardArray
                             });

export default cardSlice.reducer;