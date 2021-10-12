import { action } from 'typesafe-actions'
import { EPhotoTabs } from '../models/EPhotoTabs'
import { Photo } from '../models/photo'
import { ActionTypes } from './types'

const fetchPhotos = () => action(ActionTypes.FETCH_PHOTOS)

const fetchPhotosSuccess = (photos: Photo[]) =>
  action(ActionTypes.FETCH_PHOTOS_SUCCESS, { photos })

const fetchPhotosError = (errorMessage: string) => action(ActionTypes.FETCH_PHOTOS_ERROR, errorMessage)

const setPagePhotos = (page: number) =>
  action(ActionTypes.SET_PAGE_PHOTOS, { page })

const addFavorite = (photo: Photo) =>
  action(ActionTypes.ADD_FAVORITE, { photo })

const removeFavorite = (photo: Photo) =>
  action(ActionTypes.REMOVE_FAVORITE, { photo })

const setTabPhotos = (tab: EPhotoTabs) =>
  action(ActionTypes.SET_TAB_PHOTOS, { tab })


export {
  fetchPhotos,
  fetchPhotosSuccess,
  fetchPhotosError,
  setPagePhotos,
  addFavorite,
  removeFavorite,
  setTabPhotos
}
