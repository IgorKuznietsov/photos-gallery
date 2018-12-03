import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'

export default class ListItem extends Component {
	render(){
		let imageTitle
		if (this.props.description){
			imageTitle = this.props.description + '. ' + this.props.author
		} else {
			imageTitle = this.props.author
		}
		const image = {title: imageTitle, url: this.props.largeImage}
		const itemWidth = this.props.itemWidth
		return (
			<View style = {[{width: itemWidth}, styles.rootView]}>
				<TouchableWithoutFeedback onPress = { () => {this.props.selectPhoto( image )} }>
					<View style = {styles.innerView}>
						<Image source = {{uri: this.props.thumb}} style = {{height: itemWidth, width: itemWidth}}/>
						<Text>
							{imageTitle} 
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	rootView: {
		marginVertical: 5,
	},
	innerView: {
		flexDirection: 'column',
		alignItems: 'center',
	}
})