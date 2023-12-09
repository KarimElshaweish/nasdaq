import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ResourcesNamesList} from './types';
import { useNavation } from './navigation';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const HomeScreen = ()=>{
  const navigation = useNavation();
  return( 
  <SafeAreaView>
      <Text>Home Screen</Text>
      <Button title='Details' onPress={()=>  navigation.navigate(ResourcesNamesList.DETAILS)}/>
  </SafeAreaView>
  );
}
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

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ResourcesNamesList.HOME} component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name={ResourcesNamesList.DETAILS} component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
     </ApplicationProvider>
   
  );
}

