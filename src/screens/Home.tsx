import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QrButton from '../components/QrButton';

function Home() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem Vindo ao Techno App!</Text>
            <QrButton navigation={navigation} route={'qrcode'} />
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
    },

});

export default Home;