import React from 'react';
import {createAppContainer} from 'react-navigation';
import {AppNavigator} from './src/navigators/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const App: () => React$Node = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

export default App;
