import {createStackNavigator} from 'react-navigation-stack';
import {SearchScreen} from '../screens/SearchScreen';
import {ResultsScreen} from '../screens/ResultsScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {SWS_GREEN} from '../constants';

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
      headerLeftContainerStyle: {
        marginLeft: 30,
      },
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomColor: SWS_GREEN,
        borderBottomWidth: 1,
        fontFamily: 'Poppins-bold',
      },
      headerTintColor: SWS_GREEN,
    },
  },
);
