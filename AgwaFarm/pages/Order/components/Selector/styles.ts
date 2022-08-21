import { StyleSheet } from "react-native";
import { colors } from "../../../../common/styles/colors";

export const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    },
    title: {
        fontSize: 35,
        fontWeight: '500',
        color: colors.text.dark,
        marginBottom: 3.75,
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
        padding: 3.75,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});