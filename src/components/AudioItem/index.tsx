import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { style } from './styles';
import { Ionicons } from '@expo/vector-icons';

function AudioItem({ title, duration}) {
    const [isPlay, setIsPlay]= useState(false)
    // function handlePlay (){
    //     setIsPlay(!isPlay)
    // }

    return (
        <View style={style.audioItem}>
            <TouchableOpacity onPressIn={()=>setIsPlay(!isPlay)}>
                <View style={style.circle}>
                    <Ionicons name={ isPlay ? 'pause' : 'play' } size={28}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.audioInfo}>  
                    <Text style={style.audioTitle}>{title}</Text>  
                    <Text style={style.audioDuration}>{duration}</Text>                    
            </TouchableOpacity>
        </View>
    )
}
export default AudioItem;