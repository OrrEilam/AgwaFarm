import { StyleSheet } from "react-native";
import { baseStyles } from "../../styles/baseStyles";

export const style = StyleSheet.create({
    deleteIcon: {
        zIndex: 3,
        position: 'absolute',
        top: '0.25rem',
        right: '0.25rem',
        height: '1rem',
        ...baseStyles.roundedCircle,
    },
})