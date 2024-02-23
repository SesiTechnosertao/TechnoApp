import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AudioItem from '../components/AudioItem';
import useAudioContext from '../useAudio';

function Info() {
    const { sound } = useAudioContext();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mais Informações!</Text>
            {sound ? <AudioItem title={'title'} duration={'1:03'} /> : null}
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