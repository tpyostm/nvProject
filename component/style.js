import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    textTopStyle:{
        fontSize:25,
        textAlign:'center',
        marginBottom:16
           },
    textBottomStyle : {
        fontSize : 16,
        textAlign: 'center',
        color : 'gray'
    }
})

export {style}