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
      await AsyncStorage.getItem('user_data').then((val: any) => {
        setIsLog(JSON.parse(val).user_token.token != null);
      })
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
