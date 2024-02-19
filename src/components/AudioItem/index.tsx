import { View, TouchableOpacity, Image, Text } from 'react-native';
import { style } from './styles';
import { Ionicons } from '@expo/vector-icons';

function AudioItem() {

    return (
        <View style={style.audioItem}>
            <TouchableOpacity >
                <View style={style.circle}>
                    <Ionicons name='play' size={28}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default AudioItem;