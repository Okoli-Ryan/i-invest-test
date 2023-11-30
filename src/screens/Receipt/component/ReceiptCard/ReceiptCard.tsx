import React from "react";
import { Text, View } from "react-native";

import Hamburger from "../../../../assets/icons/hamburger.svg";
import Avatar from "../../../../components/Avatar";
import Button from "../../../../components/Button";
import { STYLES } from "../../../../core/Constants";
import { ContactsType } from "../../../../core/DummyData";
import { formatCurrency } from "../../../../core/Utils";
import { Divider } from "../Divider";
import { styles } from "./ReceiptCard.styles";

interface ReceiptCardProps {
  userDetails: ContactsType;
}

export default function ReceiptCard({ userDetails }: ReceiptCardProps) {
  return (
    <View style={styles.Container}>
      <View style={styles.BoxPadding}>
        <View style={styles.IconContainer}>
          <Hamburger width={36} height={36} />
        </View>
        <Text
          style={[
            STYLES.text_center,
            STYLES.text_dark,
            STYLES.text_bold,
            STYLES.text_lg,
          ]}
        >
          Transfer Complete
        </Text>
      </View>
      <Divider />
      <View style={styles.BoxPadding}>
        <View style={styles.RecipientContainer}>
          <Avatar src={userDetails.image} size={54} />
          <View>
            <Text style={styles.Title}>Recipient</Text>
            <Text style={styles.Value}>{userDetails.name}</Text>
          </View>
        </View>
        <View style={styles.Reference}>
          <Text style={styles.Title}>Reference number</Text>
          <Text style={styles.Value}>#D79004321786</Text>
        </View>
        <View style={styles.Transaction}>
          <View style={[STYLES.flex]}>
            <Text style={styles.Title}>Amount sent</Text>
            <Text style={styles.Value}>{formatCurrency(46.09)}</Text>
          </View>
          <View style={[STYLES.flex]}>
            <Text style={styles.Title}>Transfer fee</Text>
            <Text style={styles.Value}>{formatCurrency(0.0)}</Text>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <Button style={styles.ShareButton} textStyle={styles.ShareButtonText}>
            Share
          </Button>
        </View>
      </View>
    </View>
  );
}
