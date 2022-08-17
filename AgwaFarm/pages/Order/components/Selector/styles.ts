import { StyleSheet } from "react-native";
import { colors } from "../../../../common/styles";

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
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
    },
    imageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: colors.background.extraLight,
        borderRadius: 50 / 2,
    },
    image: {
        height: 35,
        width: 35
    },
    delete: {
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 15,
        width: 15,
        borderRadius: 15 / 2,
    }
});