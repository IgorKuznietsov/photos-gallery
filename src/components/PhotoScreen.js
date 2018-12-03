import React, { Component } from 'react'
import { View, Image } from 'react-native'

export default class PhotoScreen extends Component {
	static navigationOptions = ( {navigation} ) => ({title: navigation.getParam('title','')})

	render() {
		const imageURL = this.props.navigation.getParam('url','')
		return (
			<Image source = {{uri: imageURL}} style = {{flex: 1, height: undefined, width: undefined}} resizeMode = 'contain'/>
		)
	}
}