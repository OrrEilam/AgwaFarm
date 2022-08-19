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
        paddingHorizontal: '1em',
        paddingVertical: '0.5em',
        backgroundColor: colors.background.extraLight,
        colors: colors.text.dark,
        zIndex: 1,
    },
    header: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'capitalize',
        textAlign: 'center'
    },
    closeIconWrapper: {
    },
    closeIcon: {
        height: '0.75rem',
        width: '0.75rem',
    }
});