import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  BottomTab: undefined;
}
export type BottomTabParamList ={
  Home: undefined;
  Auth: undefined;
  Bau: {
    id: string;
  }
}
export type HomeScreenProps ={
  navigation: NativeStackNavigationProp<BottomTabParamList, 'Home'>;
}
export type AuthScreenProps ={
  navigation: NativeStackNavigationProp<BottomTabParamList, 'Auth'>;
}
export type BauScreenProps ={
  route: RouteProp<BottomTabParamList, 'Bau'>;
  navigation: NativeStackNavigationProp<BottomTabParamList, 'Bau'>;
}