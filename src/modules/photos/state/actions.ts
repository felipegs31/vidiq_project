import { action } from 'typesafe-actions'
import { EPhotoTabs } from '../models/EPhotoTabs'
import { Photo } from '../models/photo'
import { ActionTypes } from './types'

const fetchPhotos = () => action(ActionTypes.FETCH_PHOTOS)

const fetchPhotosSuccess = (photos: Photo[], appendToArray: boolean) =>
  action(ActionTypes.FETCH_PHOTOS_SUCCESS, { photos, appendToArray })

const fetchPhotosError = (errors: string) =>
  action(ActionTypes.FETCH_PHOTOS_ERROR, errors)

const nextPagePhotos = () =>
  action(ActionTypes.NEXT_PAGE_PHOTOS)

const toggleFavorite = (photo: Photo) =>
  action(ActionTypes.TOGGLE_FAVORITE, { photo })

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
  nextPagePhotos,
  addFavorite,
  toggleFavorite,
  removeFavorite,
  setTabPhotos
}
