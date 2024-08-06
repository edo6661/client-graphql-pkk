import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const baseStyles = StyleSheet.create({
  container:{
    gap:20,
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal:16,
    flex:1
  },
  centerContainer :{ 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 12
  },
  innerCenterContainer: {
    width: "100%",
    backgroundColor: "white",
    flex: 1 / 1.2,
    borderRadius: 20,
    paddingHorizontal: 20

  },
  // button
  primaryButton: {
    backgroundColor: COLORS.primaryBlue,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10
  } ,

  errorText: {
      textAlign: 'center',
      marginVertical: 12,
      fontSize: 16,
      color: COLORS.primaryRed,
  },
  border:{
    borderWidth:1,
    borderRadius:5,
  },
  primaryInput: {
    backgroundColor: COLORS.greyLight,
    width: "100%",
    paddingLeft: 20,
    borderRadius: 12,
  }
});