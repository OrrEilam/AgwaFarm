import { StyleSheet } from "react-native";
import { colors } from "../../../../common/styles/colors";
import { shadows } from "../../../../common/styles/shadows";

export const styles = StyleSheet.create({
    overlap: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        opacity: 0.5,
    },
    container: {
        zIndex: 3,
        ...shadows.medium,
        backgroundColor: colors.background.medium,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: '1rem',
        maxHeight: '75vh',
    },
    closeIconWrapper: {
        zIndex: 3,
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        width: '1.75rem',
        height: '1.75rem',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    closeIcon: {
        width: '50%',
        aspectRatio: 1,
    },
});