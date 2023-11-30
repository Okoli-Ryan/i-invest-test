import React from 'react';
import { StyleSheet, View } from 'react-native';

interface BoxContainerProps {
    title: string,
    subTitle: string,
    asset: React.ReactNode
}

export default function BoxContainer({ asset, subTitle, title}: BoxContainerProps) {
  return (
    <View style={styles.container}>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    }
})