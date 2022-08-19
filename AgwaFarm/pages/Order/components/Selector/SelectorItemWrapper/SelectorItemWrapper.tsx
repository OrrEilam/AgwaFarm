import React from "react";
import { View } from "react-native"
import { styles } from "./styles";

/**
 * An HOC component that adds a wrapper and some styles.
 * @param key The component's key (since it's a child of a map).
 * @param component The component to wrap using the HOC.
 * @returns A new JSX.Element with the added functionallity.
 */
export const SelectorItemWrapper = (key: number, component: React.ReactNode) => {
    return (
        <View key={key} style={styles.selectorItem}>
            {component}
        </View>
    )
}