import { View, Text } from 'react-native';
import { Header } from './components/Header/Header';
import { Introduction } from './components/Intoduction/Introduction';
import { styles } from './styles';

export const OrderScreen: React.FC<{}> = () => {

    const handleOnClose = (): void => {
        alert('onClose');
    }

    return (
        <View style={styles.container}>
            <Header onClose={handleOnClose} />
            <View style={styles.content}>
                <Introduction />
            </View>
        </View>
    );
};