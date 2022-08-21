import { StyleSheet } from "react-native";
import { colors } from "../../common/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flexGrow: 1,
        backgroundColor: colors.background.light,
        padding: 15,
    },
    saveButtonContainer: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background.light,
    },
});