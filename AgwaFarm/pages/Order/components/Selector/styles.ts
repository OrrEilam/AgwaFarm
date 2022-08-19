import { StyleSheet } from "react-native";
import { colors } from "../../../../common/styles/colors";

export const styles = StyleSheet.create({
    container: {
        marginVertical: '1rem',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.text.dark,
        marginBottom: '0.25rem',
    },
    selector: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        flexGrow: 0,
    },
    selectorItem: {
        flexBasis: '20%',
        padding: '0.25rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});