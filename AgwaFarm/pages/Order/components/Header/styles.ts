import { StyleSheet } from "react-native";
import { colors } from "../../../../common/styles/colors";
import { shadows } from "../../../../common/styles/shadows";

export const styles = StyleSheet.create({
    container: {
        ...shadows.light,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 7.5,
        backgroundColor: colors.background.extraLight,
        colors: colors.text.dark,
        zIndex: 1,
    },
    header: {
        flexGrow: 1,
        fontSize: 40,
        fontWeight: '700',
        textTransform: 'capitalize',
        textAlign: 'center'
    },
    closeIconWrapper: {
    },
    closeIcon: {
        height: 15,
        width: 15,
    }
});