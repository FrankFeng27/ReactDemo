import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type StatusEnum = "idle" | "loading" | "rejected" | "successed";

export interface LibraryItem {
 name: string;
 id: string;   
}
export interface SpeechState {
  status: StatusEnum;
  libraries: LibraryItem[];
  currentLibrary?: LibraryItem;
}

const getLibrariesAsync = (): Promise<Array<LibraryItem>> => {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve([{name: "/memos/2022-7-18", id: "1"}, {name: "/memos/2022-7-19", id: "2"}]);
      }, 6000);
    });
}

export const getLibraries = createAsyncThunk(
  "speeches/getLibraries",
  async () => {
    const res = await getLibrariesAsync();
    return res;
  }
);
const initialState: SpeechState = {
  status: "idle",
  libraries: [],
};

const slice = createSlice({
  name: "speeches",
  initialState,
  reducers: {
    setCurrentLibrary(state, action) {
      state.currentLibrary = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(getLibraries.pending, (state, action) => {
      state.status = "loading";
    })
    .addCase(getLibraries.fulfilled, (state, action) => {
      state.status = "idle";
      state.libraries = action.payload;
    });
  }
});

export const { setCurrentLibrary } = slice.actions;
export default slice.reducer;
