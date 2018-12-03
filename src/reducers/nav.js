import { NavigationActions } from 'react-navigation'
import { RootNavigator } from '../navigators/RootNavigator'

const photoScreenAction = RootNavigator.router.getActionForPathAndParams('PhotoScreen')
const photoScreenState = RootNavigator.router.getStateForAction(photoScreenAction)

const listScreenAction = RootNavigator.router.getActionForPathAndParams('ListScreen')
const listScreenState = RootNavigator.router.getStateForAction(listScreenAction)

export default navReducer = (state = listScreenState, action) => {
	switch (action.type){
		case 'selectPhoto': {
			return RootNavigator.router.getStateForAction(
				NavigationActions.navigate({
				routeName: 'PhotoScreen', 
				params: action.payload
				}),
				state
			)
		}
		default: {
			return RootNavigator.router.getStateForAction(action, state)
		}
	}
}