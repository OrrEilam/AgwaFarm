import { StyleSheet } from "react-native";

export const colors = {
    text: {
        dark: '#161616',
        medium: '#7B7B7B',
        light: '#BFBFBF',
    },
    action: {
        first: '#AA9FC4',
        second: '#6FCB86',
    },
    background: {
        extraLight: '#F6F4FE',
        light: '#F0ECFD',
        medium: '#CDC6DF',
        dark: '#9F99AA',
    },
    shade: {
        light: '#9F99AA',
        dark: '#7B7B7B',
    }
};

export const shadows = StyleSheet.create({
    light: {
        shadowOffset: { width: 0, height: 2 },  
        shadowColor: colors.shade.light,
        shadowOpacity: 0.25,
        shadowRadius: 5,
    }
});