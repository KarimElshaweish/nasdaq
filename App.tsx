import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ResourcesNamesList} from './types';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { HomeScreen } from './screens';
import { Colors } from './branding';
import { Provider } from 'react-redux'

import { store } from './store';

const DetailsScreen = ()=>{
  return (
    <SafeAreaView>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>Detils</Text>
  </Layout>
  </SafeAreaView>
  )
}
const Stack = createNativeStackNavigator();

const App= ()=> {
  return (
    <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.dark}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle:styles.container
      }}>
        <Stack.Screen name={ResourcesNamesList.HOME} component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name={ResourcesNamesList.DETAILS} component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
     </ApplicationProvider>
    </Provider>

   
  );
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:Colors.priamary,
  }
})

export default App;