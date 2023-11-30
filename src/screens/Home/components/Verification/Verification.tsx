import React from 'react';
import { View } from 'react-native';

import { SubHeader } from '../../../../components';
import VerificationProgress from './components/VerificationProgress';
import VerificationSections from './components/VerificationSections';
import { styles } from './Verification.styles';

export default function Verification() {
  return (
    <SubHeader title="Complete Verification" style={{ marginTop: 45 }}>
      <View style={styles.Container}>
        <VerificationProgress />
        <VerificationSections />
      </View>
    </SubHeader>
  );
}
