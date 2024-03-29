import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Camera } from 'expo-camera'
import useAudioContext from '../useAudio';
import { loadSound } from '../utils';


function QrReader() {
    const { setIsPlay, setSound, setQrCode } = useAudioContext();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        setScanned(true);
        if (data == 'TECHNO') {
            setQrCode(scanned)
            try {
                setIsPlay(true)
                const { sound: soundObject, status } = await Audio.Sound.createAsync(
                    require('../assets/audios/1214.mp3'), {
                    shouldPlay: true
                })
                setSound({ soundObject, status })

                // Your sound is playing!
            } catch (error) {
                // An error occurred!
            }
            navigation.navigate('Info')
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
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
                <Camera
                    style={StyleSheet.absoluteFillObject}
                    barCodeScannerSettings={{
                        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                    }}
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                />
                <Text style={styles.title}>Leia seu QR CODE aqui !</Text>
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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