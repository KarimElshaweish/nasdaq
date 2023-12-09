import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ResourcesNamesList} from './types';
import { useNavation } from './navigation';

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
      <Text>Details Screen</Text>
  </SafeAreaView>
  )
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ResourcesNamesList.HOME} component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name={ResourcesNamesList.DETAILS} component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

