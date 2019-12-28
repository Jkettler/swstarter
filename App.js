import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {SearchScreen} from './src/screens/SearchScreen';
import {ResultsScreen} from './src/screens/ResultsScreen';
import {DetailsScreen} from './src/screens/DetailsScreen';

const AppNavigator = createStackNavigator({
  Search: {screen: SearchScreen},
  Results: {screen: ResultsScreen},
  Details: {screen: DetailsScreen},
});

const AppContainer = createAppContainer(AppNavigator);

const App: () => React$Node = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

export default App;
