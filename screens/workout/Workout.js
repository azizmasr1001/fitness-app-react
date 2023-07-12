import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FitnessContext } from "../../Context";

import HomeScreen from "../workout/HomeScreen";
import StackNavigator from "../../StackNavigator";
import MainContainer from "../../screens/navigation/MainContainer";

export default function App() {
  return (
    <FitnessContext>
        <StackNavigator />
    </FitnessContext>
  ) ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
