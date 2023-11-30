import { useEffect } from "react";
import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigators/RootNavigator";

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
