import { StyleSheet, Text, View } from 'react-native';

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem Vindo ao Techno App!</Text>
            <Text style={styles.paragraph}>Aproveite nossas promoções!</Text>
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

export default Home;