import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    errorMessageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessageIcon: {
        width: '5rem',
        height: '5rem',
        marginVertical: '1rem',
    },
    errorMessageTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    errorMessageText: {
        fontSize: 15,
    }
})