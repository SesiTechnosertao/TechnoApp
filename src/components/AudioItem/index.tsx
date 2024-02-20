import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { style } from './styles';
import { Ionicons } from '@expo/vector-icons';

function AudioItem() {
    const [isPlay, setIsPlay]= useState(false)
    // function handlePlay (){
    //     setIsPlay(!isPlay)
    // }

    return (
        <View style={style.audioItem}>
            <TouchableOpacity onPressIn={()=>setIsPlay(!isPlay)}>
                <View style={style.circle}>
                    <Ionicons name={ isPlay ? 'play' : 'pause'} size={28}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default AudioItem;