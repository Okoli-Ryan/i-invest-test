import React from "react";
import { TouchableOpacity, View } from "react-native";
import IIcons from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";

import { STYLES } from "../core/Constants";

interface HeaderProps {
  Right: React.ReactNode;
}

export default function Header({ Right }: HeaderProps) {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  const goBack = () => {
    if (canGoBack) navigation.goBack();
  };

  return (
    <View style={[STYLES.row, STYLES.boxPadding, { width: "100%" }]}>
      <TouchableOpacity onPress={goBack}>
        <IIcons name="chevron-back" size={24} />
      </TouchableOpacity>
      <TouchableOpacity>{Right}</TouchableOpacity>
    </View>
  );
}
