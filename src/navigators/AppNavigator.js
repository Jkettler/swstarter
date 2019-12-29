import {createStackNavigator} from 'react-navigation-stack';
import {SearchScreen} from '../screens/SearchScreen';
import {ResultsScreen} from '../screens/ResultsScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {SWSTARTER_GREEN} from '../constants';

export const AppNavigator = createStackNavigator(
  {
    Search: {screen: SearchScreen},
    Results: {screen: ResultsScreen},
    Details: {screen: DetailsScreen},
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'SWStarter',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomColor: SWSTARTER_GREEN,
        fontFamily: 'Poppins-bold',
      },
      headerTintColor: SWSTARTER_GREEN,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      cardStyle: {
        flex: 1,
        margin: 10,
        justifyContent: 'space-between',
      },
    },
  },
);
