import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AudioItem from '../components/AudioItem';
import SearchBar  from '../components/SearchBar';

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
            <AudioItem title='Audio|Maquete avião|Museu da rampa' duration={'3:36'}/>
            <AudioItem title='Audio 1' duration={'2:24'}/>
            <AudioItem title='Audio 2' duration={'3:22'}/>
            <AudioItem title='Audio 3' duration={'5:25'}/>
            <AudioItem title='Audio 4' duration={'1:43'}/>
            <AudioItem title='Audio 5' duration={'2:32'}/>
            <AudioItem title='Audio 6' duration={'2:18'}/>
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