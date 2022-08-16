import { StyleSheet } from "react-native";
import { colors } from "../../../../common/styles";

export const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
        color: colors.text.dark,
        marginBottom: '0.25rem',
    },
    description: {
        fontSize: 15,
        fontWeight: '400',
        color: colors.text.medium,
    }
});