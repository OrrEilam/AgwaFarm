import { StyleSheet } from "react-native";
import { colors } from "../../../../common/styles/colors";

export const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 35,
        fontWeight: '500',
        color: colors.text.dark,
        marginBottom: 7.5,
    },
    description: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.text.medium,
        marginHorizontal: 20,
    },
});