import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PagedRequest, ResourceState } from "common/types";
import { EPhotoTabs } from "../models/EPhotoTabs";
import { Photo } from "../models/photo";
import { photoService } from "../service/photo.service";

interface PhotosState {
  data: Photo[];
  state: ResourceState;
  tab: EPhotoTabs;
}

const initialState: PhotosState = {
  data: [],
  state: ResourceState.IDLE,
  tab: EPhotoTabs.ALL
};

const { reducer, actions } = createSlice({
  name: "photos",
  initialState,
  reducers: {
    request(state, _: PayloadAction<PagedRequest>) {
      state.state = ResourceState.LOADING;
    },
    requestError(state) {
      state.state = ResourceState.ERROR;
    },
    receive(state, { payload }: PayloadAction<Photo[]>) {
      state.state = ResourceState.DONE;
      state.data = payload;
    },
    changeTab(state, { payload }: PayloadAction<EPhotoTabs>) {
      state.tab = payload
    }
  },
});



/**
 * You don't need to use thunks if you do not want to, feel free to use sagas or redux observable.
 */
const fetchPhotos = createAsyncThunk(
  "photos/request",
  async (paging: PagedRequest, thunkAPI) => {
    try {
      const response = await photoService.get(paging);
      thunkAPI.dispatch(actions.receive(response.data));
    } catch (error) {
      thunkAPI.dispatch(actions.requestError());
    }
  }
);

export const photosActions = { fetchPhotos };
export const { request } = actions

export const photosReducer = reducer;
