import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {RootNavigator} from '@navigation';
import {store} from '@shared-state';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [isLog, setIsLog] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      let value = await AsyncStorage.getItem('tokenAuth');
      setIsLog(value != null);
    }
    checkAuth();
  }, []);

  auth().signInAnonymously();

  return (
    <Provider store={store}>
      <RootNavigator isLoggedIn={isLog} />
    </Provider>
  );
};

export default App;
