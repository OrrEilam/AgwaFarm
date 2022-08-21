import { StyleSheet } from "react-native";
import { colors } from "../../../../common/styles/colors";
import { shadows } from "../../../../common/styles/shadows";

export const styles = StyleSheet.create({
    overlap: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
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
        padding: 15,
        maxHeight: '75vh',
    },
    closeIconWrapper: {
        zIndex: 3,
        position: 'absolute',
        top: 7.5,
        right: 7.5,
        width: 27.5,
        height: 27.5,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    closeIcon: {
        width: '50%',
        aspectRatio: 1,
    },
});