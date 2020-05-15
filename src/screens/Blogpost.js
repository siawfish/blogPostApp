import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'


export default class Blogpost extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topLeftSq}></View>
                <View style={styles.topMenu}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    topLeftSq: {
        position:'absolute',
        top:0,
        height: 280,
        width:220,
        backgroundColor:'red',
        opacity:0.7
    },

    topMenu: {
        flex
    }
  })
