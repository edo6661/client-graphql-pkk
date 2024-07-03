import { StyleSheet } from "react-native";

export const baseStyles = StyleSheet.create({
  container:{
    gap:20,
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal:16,
    flex:1
  },
  stateText: {
      textAlign: 'center',
      marginVertical: 12,
      fontSize: 16,
  },
  border:{
    borderWidth:1,
    borderRadius:5,
  }
});