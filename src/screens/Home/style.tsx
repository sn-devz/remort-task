import { StyleSheet } from "react-native";
import { blackColor } from "@utils/constants/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContainer: {
      backgroundColor: blackColor,
      flex: 1,
      height:'100%'
    },
    scrollViewContainer:{flexGrow:1 }
  });