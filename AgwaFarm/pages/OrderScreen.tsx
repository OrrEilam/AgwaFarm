import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export const OrderScreen: React.FC<{}> = () => {
    return (
        <View style={styles.container}>
            <Text>
                Order Screen Will Be Here!
            </Text>
        </View>
    );
};