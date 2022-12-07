import {createAsyncThunk} from "@reduxjs/toolkit";
import {findMostAnticipatedAnime} from "./most-anticipated-service";


export const findMostAnticipatedAnimeThunk = createAsyncThunk(
    'findMostAnticipatedAnime',
    () => findMostAnticipatedAnime()
)