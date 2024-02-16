import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

function QrReader() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    return (<>
        <View style={{
            ...styles.container,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right
        }}>
            <View style={styles.backBtn}>
                <TouchableOpacity onPressIn={() => navigation.navigate('home')}>
                    <Ionicons name={'arrow-back'} color={'#fff'} size={32} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Leia seu QR CODE aqui !</Text>
            </View>
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    content: {
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
    },
    backBtn: {
        backgroundColor: '#000',
        height: 80,
        padding: 10
    }
});

export default QrReader;