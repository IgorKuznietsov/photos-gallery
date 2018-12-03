import React, { Component } from 'react'
import PhotosList from './PhotosList'

export default class ListScreen extends Component {
  static navigationOptions = {title: 'Gallery'}
  render() {
    return <PhotosList/>
  }
}
  