import React, { Component } from 'react'
import { ScrollView, View, Dimensions, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class PhotosList extends Component {
	constructor(){
		super()
		this.state = { screenWidth: Dimensions.get('window').width }  //handling screen rotation
		Dimensions.addEventListener('change', () => {this.setState( {screenWidth: Dimensions.get('window').width} )} )
	}

  componentDidMount() {
    this.props.fetchPhotos()
  }
  
	render() {
		let listItems
		let emptyViews = []

		const itemWidth = 100

		if (this.props.photos) {
			listItems = this.props.photos.map( (item) => { 
				return (<ListItem 
					description = {item.description} 
					key = {item.id} 
					author = {item.author} 
					thumb = {item.thumb} 
					largeImage = {item.largeImage} 
					selectPhoto = {this.props.selectPhoto}
					itemWidth = {itemWidth}
				/>)
			})

			let screenWidth = this.state.screenWidth
			let itemsPerRow = Math.floor(screenWidth / itemWidth)
			let lastLineItemsCount = this.props.photos.length % itemsPerRow
			let emptyViewsCount = (itemsPerRow - lastLineItemsCount) % itemsPerRow

			for(let i = 0; i < emptyViewsCount; i++){
				emptyViews.push(<View key = {i} style = {{width: itemWidth}}/>)
			}
		}
		return (
			<ScrollView>
				<View style = {styles.rootView}>
					{listItems}
					{emptyViews}
				</View>
			</ScrollView>
		)
	}
}
 
const styles = StyleSheet.create({
	rootView: {
		flexDirection: 'row', 
		flexWrap: 'wrap', 
		justifyContent: 'space-around'
	}
})

//actionCreators++
function selectPhoto(photo){
  return {
    type: 'selectPhoto',
    payload: photo
  }
}
  
function updatePhotos(photos) {
  return {
    type: 'updatePhotos',
    payload: photos
  }  
}
//actionCreators--	


//actions++
const url = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'

function fetchPhotos() {
	return (dispatch) => {
		fetch(url)
		.then((response) => {
		if (response.ok) {
			return response
		} else {
				Promise.reject()
		}
		})
		.then( (response) => response.json() )
		.then( (parsedResponse) => {
			let photos = []
			parsedResponse.map( (photo) => {
				photos.push({
				id: photo.id,
				largeImage: photo.urls.full,
				thumb: photo.urls.thumb,
				author: photo.user.name,
				description: photo.description,
				})
			})
			dispatch( updatePhotos(photos) )
		})
		.catch( (err) => {console.log(err)} )
	}
}
//actions--

const mapStateToProps = state => ({
	photos: state.gallery.photos
})

const mapDispatchToProps = dispatch => ({
	selectPhoto: (photo) => dispatch( selectPhoto(photo) ),
	fetchPhotos: () => dispatch ( fetchPhotos() )
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PhotosList)