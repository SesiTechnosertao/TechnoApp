import React, { useEffect, useState, createContext, useContext } from 'react';
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import { loadSound, playSound, pauseSound } from './utils';

const initialState = {
    isLoading: false,
    sound: undefined,
    isPlay: false,
    setSound: undefined,
    setIsPlay: undefined,
    qrCode: undefined,
    setQrCode: undefined,
}

export const AudioContext = createContext(initialState)

export const AudioProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [sound, setSound] = useState(undefined);
    const [currentStatus, setCurrentStatus] = useState({})
    const [isPlay, setIsPlay] = useState(false);
    const [qrCode, setQrCode] = useState(false);

    useEffect(() => {
        Audio.requestPermissionsAsync().then(({ granted }) => {
            if (granted) {
                Audio.setAudioModeAsync({
                    interruptionModeIOS: InterruptionModeIOS.DoNotMix,
                    playsInSilentModeIOS: false,
                    shouldDuckAndroid: true,
                    interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
                    playThroughEarpieceAndroid: false
                })
            }
        })
    }, [sound])

    useEffect(() => {
        if (qrCode) {
            setSound(loadSound(new Audio.Sound))
        }
    }, [])




    useEffect(() => {
        if (isPlay) {
            handleAudioPlay()
            console.log('Sound =>', sound)
        }
        handleAudioPause()

    }, [isPlay])

    async function handleAudioPlay() {
        if (sound && sound.status.isPlaying != true) {
            setIsLoading(true)
            console.log('Playind Sound', sound.status.isPlaying);
            setCurrentStatus(await playSound(sound.soundObject));
            setSound({ ...sound, status: currentStatus });
            setIsLoading(false)

        }
    }

    async function handleAudioPause() {
        if (sound && sound.status.isPlaying) {
            setIsLoading(true)
            console.log('Pausing Sound', sound.status.isPlaying);
            setCurrentStatus(await pauseSound(sound.soundObject));
            console.log(currentStatus)
            setSound({ ...sound, status: currentStatus });
            setIsLoading(false)
        }
    }


    return (
        <AudioContext.Provider value={{
            isLoading,
            sound,
            isPlay,
            setSound,
            setIsPlay,
            qrCode,
            setQrCode,
        }}>
            {children}
        </AudioContext.Provider>
    )
}

const useAudioContext = () => {
    const context = useContext(AudioContext)

    if (context === undefined) {
        throw new Error('useAudio must be used within a AudioProvider')
    }

    return context
}

export default useAudioContext

