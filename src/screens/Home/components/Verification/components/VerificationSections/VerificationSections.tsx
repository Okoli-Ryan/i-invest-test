import React from 'react';
import { View } from 'react-native';

import EmailIcon from '../../../../../../assets/icons/email.svg';
import IdCard from '../../../../../../assets/icons/id-card.svg';
import UserIcon from '../../../../../../assets/icons/user.svg';
import VerificationItem from './components/VerificationItem';
import { VerificationItemProps } from './components/VerificationItem/VerificationItem';
import useVerificationSections from "./useVerificationSections";
import { styles } from "./VerificationSections.styles";

export default function VerificationSections() {
  const { selectActiveIndex, activeIndex } = useVerificationSections();

  return (
    <View style={styles.Container}>
      {SECTIONS.map((section, index) => (
        <VerificationItem
          key={index}
          index={index}
          selectActiveIndex={selectActiveIndex}
          activeIndex={activeIndex}
          {...section}
        />
      ))}
    </View>
  );
}

const SECTIONS: VerificationItemProps[] = [
  {
    icon: <UserIcon width={15} height={17} />,
    title: "Personal Information",
    description:
      "Please provide documents to verify your source of income personal information.",
  },
  {
    icon: <IdCard width={21} height={14} />,
    title: "Verification",
    description:
      "Take a snapshot of your voter's card, driver's license or passport.",
  },
  {
    icon: <EmailIcon width={21} height={15} />,
    title: "Confirm Email",
    description: "Please confirm your email address.",
  },
];
