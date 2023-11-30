import React from "react";
import { Pressable, Text, View } from "react-native";

import Avatar from "../../../../../../components/Avatar";
import Button from "../../../../../../components/Button";
import { STYLES } from "../../../../../../core/Constants";
import { ContactsType } from "../../../../../../core/DummyData";
import { styles } from "./ContactBox.styles";

export default function ContactBox({ image, name }: ContactsType) {
  return (
    <View style={styles.Container}>
      <View style={styles.InnerContainer}>
        <Avatar src={image} size={54} />
        <View style={styles.ContactTextContainer}>
          <Text style={[STYLES.text_dark, STYLES.text_bold]}>{name}</Text>
          <Text
            style={[
              STYLES.text_lighterGray,
              STYLES.text_sm,
              STYLES.text_regular,
            ]}
          >
            +090078601
          </Text>
        </View>
      </View>
      <Button style={styles.button} textStyle={styles.buttonText}>
        Invite
      </Button>
    </View>
  );
}
