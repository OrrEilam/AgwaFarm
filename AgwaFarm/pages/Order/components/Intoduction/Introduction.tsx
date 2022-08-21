import React from "react";
import { Text, View } from "react-native"
import { getMonthName, getNextMonth } from "../../../../common/methods/dates";
import { styles } from "./styles"

/**
 * A component that views the introduction paragraph.
 * @returns The component's JSX render.
 */
export const Introduction: React.FC = () => {

    const today = new Date();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Your next order
            </Text>
            <Text style={styles.description}>
                The monthly plants order consists of 5 plants. {'\n'}
                Changes to your next order can be made until the end of {getMonthName(today.getMonth())}. {'\n'}
                This order will be shipped on the beginning of {getMonthName(getNextMonth(today))}. {'\n'}
            </Text>
        </View>
    )
}