import { View, Text, Image, FlatList, ListRenderItemInfo, TouchableOpacity } from "react-native"
import { styles } from "./styles"

interface Plant {
    name: string;
    imageURL: string;
    catagory: string;
}

const data: Plant[] = [
    {
        name: 'Lettuce',
        imageURL: '',
        catagory: 'Green Head'
    },
    {
        name: 'Romain',
        imageURL: '',
        catagory: 'Green Head'
    },
    {
        name: 'Parsley',
        imageURL: '',
        catagory: 'Greens'
    },
    {
        name: 'Chard',
        imageURL: '',
        catagory: 'Greens'
    },
    {
        name: 'Claytonia',
        imageURL: '',
        catagory: 'Greens'
    },
]

interface SelectorItemProps {
    item: Plant;
    onDelete: () => void;
}
const SelectorItem: React.FC<SelectorItemProps> = (props: SelectorItemProps) => {
    return (
        <View style={styles.selectorItem}>
            <TouchableOpacity onPress={props.onDelete} style={styles.imageWrapper}>
                <Image source={require('../../../../assets/images/leaf.png')} style={styles.image} />
                <Text style={styles.delete}>-</Text>
                <Image source={require('../../../../assets/icons/minus-sign.svg')} style={styles.delete} />
            </TouchableOpacity>
            <Text>{props.item.name}</Text>
        </View>
    )
}

export const Selector: React.FC = () => {

    const onItemDelete = (item: Plant, index: number): void => {
        alert(item.name);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Your selected plants:
            </Text>
            <View style={styles.selector}>
                {
                    data.map((item: Plant, index: number) => {
                        return (
                            <SelectorItem
                                key={index}
                                item={item}
                                onDelete={() => onItemDelete(item, index)}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
}