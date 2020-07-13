import React from 'react'
import {Platform} from 'react-native'
import {HeaderButton} from 'react-navigation-header-buttons'
import {Ionicons} from '@expo/vector-icons'

const CustomHeaderButton=props=>{
    return <HeaderButton {...props}
    IconComponent={Ionicons}
    iconSize={21}
    color={Platform.OS==='android'?'black':'pink'}
    />
}

export default CustomHeaderButton