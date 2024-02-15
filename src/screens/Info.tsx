import { StyleSheet, Text, View } from 'react-native';

function Info() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mais Informações!</Text>
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

export default Info;