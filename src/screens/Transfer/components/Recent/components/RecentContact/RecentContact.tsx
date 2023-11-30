import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Avatar from "../../../../../../components/Avatar";
import { ContactsType } from "../../../../../../core/DummyData";
import { styles } from "./RecentContact.styles";

export default function RecentContact({
  image,
  name,
  onPress,
}: ContactsType & { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      <Avatar src={image} size={72} />
      <View>
        <Text style={styles.Name}>{name.split(" ")[0]}</Text>
        <Text style={styles.Number}>+090078601</Text>
      </View>
    </TouchableOpacity>
  );
}
