import { createStackNavigator } from 'react-navigation'
import { connect} from 'react-redux'
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

import ListScreen from '../components/ListScreen'
import PhotoScreen from '../components/PhotoScreen'

const middleware = createReactNavigationReduxMiddleware('root', (state) => {state.nav})

const RootNavigator = createStackNavigator(
  {
    ListScreen: {screen: ListScreen}, 
    PhotoScreen: {screen: PhotoScreen}, 
  },
  {
    initialRouteName: 'ListScreen',
  }
)
  
ReduxifiedNavigator = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = state => {return (
  {
    state: state.nav
  }
)}
  
const AppNavigator = connect(mapStateToProps)(ReduxifiedNavigator)

export { RootNavigator, AppNavigator, middleware }
  