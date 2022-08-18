import { StyleSheet } from "react-native";
import { colors } from "../../common/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flexGrow: 1,
        backgroundColor: colors.background.light,
        padding: '1rem'
    }
});