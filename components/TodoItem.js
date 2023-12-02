import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function TodoItem({item, handler}) {
    return (
        <TouchableOpacity onPress={() => handler(item.key)}>
            <View style={styles.item}>
            <AntDesign name="delete" size={15} color="black" />
            <Text>  {item.text}  </Text>
                
            </View>
        </TouchableOpacity>
    )
}

const styles  = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: "row"
    }
})