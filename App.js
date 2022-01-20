import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { Provider } from 'react-redux';

export default function App() {
  const store = createStore(reducers, applyMiddleware(thunk))
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Text>Let's build UBER mobile app!</Text>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
