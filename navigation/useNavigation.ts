import { useNavigation } from "@react-navigation/native";
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { type RootStackParamList } from "../types";

const useNavation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};

export default useNavation;
