const initState = {
  photos: []
}
  
export default galleryReducer = (state = initState, action) => {
	switch (action.type){
		case 'updatePhotos': {
			return {...state, photos: action.payload}
		}
		default:
			return state
	}
}
  