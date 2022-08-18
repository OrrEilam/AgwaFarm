import React from "react";
import { View } from "react-native"
import { styles } from "./styles";

export const SelectorItemWrapper = (key: number, component: React.ReactNode) => {
    return (
        <View key={key} style={styles.selectorItem}>
            { component }
        </View>
    )
}