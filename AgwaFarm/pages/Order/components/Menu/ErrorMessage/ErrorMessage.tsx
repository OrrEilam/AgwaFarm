import { View, Text, Image } from 'react-native';
import { IconName } from '../../../../../common/enums/IconName';
import { styles } from "./styles"

/**
 * A component that views a the error message for the menu.
 * @returns The component's JSX render.
 */
export const ErrorMessage: React.FC = () => {
    return (
        <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessageTitle}>
                Could not load menu :\
            </Text>
            <Image
                source={require(`../../../../assets/icons/${IconName.Plant}.svg`)}
                style={styles.errorMessageIcon}
            />
            <Text style={styles.errorMessageText}>
                Please try again later...
            </Text>
        </View>
    )
}