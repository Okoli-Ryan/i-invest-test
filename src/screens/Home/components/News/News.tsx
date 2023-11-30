import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import NewsPromoImage from "../../../../assets/icons/news-promo.svg";
import { SubHeader } from "../../../../components";
import { STYLES } from "../../../../core/Constants";
import { styles } from "./News.styles";

export default function News() {
  return (
    <SubHeader title="News and Promo" style={styles.Container}>
      <View style={styles.InnerContainer}>
        <View style={styles.ImageContainer}>
          <NewsPromoImage height={160} width="100%" translateY={-8} />
        </View>
        <View style={styles.TextContainer}>
          <TouchableOpacity>
            <Text style={[STYLES.text_dark, STYLES.text_bold]}>
              Invite your friends!
            </Text>
          </TouchableOpacity>
          <Text style={[STYLES.text_regular, STYLES.text_dark]}>
            For every user you invite and signs up, you can earn up $5.
          </Text>
          <Text style={styles.InviteNow}>Invite Now</Text>
        </View>
      </View>
    </SubHeader>
  );
}
