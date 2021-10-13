import { Photo } from "modules/photos/models/photo";
import { initialState, photosReducer } from "modules/photos/state/reducers";
import { photosData } from "../../__mockData__/photosData";
import { fetchPhotos, fetchPhotosSuccess } from './../../../state/actions'


describe("photos reducer", () => {

	it("should return initial state", () => {
		expect(
			photosReducer(initialState, { type: "no type", payload: null })
		).toEqual(initialState);
	});
	it("should handle fetching photos", () => {
		expect(photosReducer(initialState, fetchPhotos())).toEqual({
			...initialState,
			loading: true,
            errors: ''
		});
	});
	it("should handle successfully fetch photos without appending to array", () => {
		expect(photosReducer(initialState, fetchPhotosSuccess(photosData, false))).toEqual({
			...initialState,
			photos: photosData
		});
	});
    it("should hydrate favorites from localStorate", () => {
		const favoriteObject = {} as { [id: string] : Photo } 

		photosData.map(photo => {
			favoriteObject[photo.id] = photo
		})

		const stateWithFavorites = {
			...initialState,
			favorites: favoriteObject
		}

        localStorage.setItem('favorites', JSON.stringify(favoriteObject))

		expect(photosReducer(stateWithFavorites, fetchPhotos())).toEqual({
			...initialState,
			loading: true,
			favorites: favoriteObject,
            errors: ''
		});
	});
	it("should set as favorite photos after fetch", () => {
		const favoriteObject = {} as { [id: string] : Photo } 

		photosData.map(photo => {
			favoriteObject[photo.id] = photo
		})

		const stateWithFavorites = {
			...initialState,
			favorites: favoriteObject
		}

		expect(photosReducer(stateWithFavorites, fetchPhotosSuccess(photosData, false))).toEqual({
			...stateWithFavorites,
			photos: photosData
		});
	});
});
