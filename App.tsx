import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {RootNavigator} from '@navigation';
import {store} from '@shared-state';
import auth from '@react-native-firebase/auth';

const App = () => {
  auth().signInAnonymously();

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
