import { StyleSheet, Text, View } from 'react-native';
import AudioItem from '../components/AudioItem';

function Audio() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ouça nosso Audios!</Text>
            <AudioItem />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 18,
    },
    paragraph: {
        color: '#fff',
        fontSize: 14,
    }
});

export default Audio;