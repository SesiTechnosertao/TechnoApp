import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({

    audioItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 5,
        width: 310,
        height: 60,
        backgroundColor: "#FF914D",
        borderRadius: 20
    },
    textButton: {
        marginTop: 10,
        fontSize: 34,
        fontWeight: 'bold',
    },
    circle: {
        margin: 10,
        height: 40,
        width: 40,
        backgroundColor: "#fff",
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center"
    }
})