import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { style } from './styles';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import useAudioContext from '../../useAudio';

const ICON_SIZE = 28;

function AudioItem({ title, duration }) {
    const { isLoading, setIsPlay, isPlay } = useAudioContext();

    return (
        <View style={style.audioItem}>
            {isPlay ?
                <TouchableOpacity onPressIn={() => setIsPlay(false)}>
                    <View style={style.circle}>
                        {isLoading ?
                            <EvilIcons name="spinner-3" size={ICON_SIZE} color="black" />
                            :
                            <Ionicons name='pause' size={ICON_SIZE} />}
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity onPressIn={() => setIsPlay(true)}>
                    <View style={style.circle}>
                        {isLoading ?
                            <EvilIcons name="spinner-3" size={ICON_SIZE} color="black" />
                            :
                            <Ionicons name='play' size={ICON_SIZE} />}
                    </View>
                </TouchableOpacity>
            }
            <TouchableOpacity style={style.audioInfo} onPressIn={() => setIsPlay(true)}>
                <Text style={style.audioTitle}>{title}</Text>
                <Text style={style.audioDuration}>{duration}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default AudioItem;