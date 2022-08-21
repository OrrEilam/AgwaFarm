import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    errorMessageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessageIcon: {
        width: 75,
        height: 75,
        marginVertical: 15,
    },
    errorMessageTitle: {
        fontSize: 35,
        fontWeight: '600',
    },
    errorMessageText: {
        fontSize: 20,
    }
})