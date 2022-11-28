import {createAsyncThunk} from "@reduxjs/toolkit";
import {findBySearchTerm} from "./search-service";

export const findBySearchTermThunk = createAsyncThunk(
    'findBySearchTerm',
    (term) => findBySearchTerm(term)
)