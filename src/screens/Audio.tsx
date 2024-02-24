import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AudioItem from '../components/AudioItem';
import SearchBar from '../components/SearchBar';

const audiosExemplo = [
    {
        id: 1,
        title: "Titulo do audio",
        duration: '03:46'
    },
    {
        id: 2,
        title: "Batman audio sample",
        duration: '02:40'
    },
    {
        id: 3,
        title: "pokemon Intro",
        duration: '01:26'
    },
    {
        id: 4,
        title: "Fast and Furious",
        duration: '02:32'
    },
    {
        id: 5,
        title: "Happy birthday to U",
        duration: '03:02'
    },
]

function Audio() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{
            ...styles.container,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right
        }}>
            <SearchBar />
            {audiosExemplo.map((item) => (
                <><AudioItem title={item.title} key={item.id} duration={item.duration} /></>
            ))}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
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