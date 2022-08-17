import { StyleSheet } from "react-native";
import { colors, shadows } from "../../../../common/styles";

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
        colors: colors.text,
        zIndex: 1,
    },
    header: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'capitalize',
        textAlign: 'center'
    },
    exit: {
    },
    closeIcon: {
        height: '0.75rem',
        width: '0.75rem',
    }
});