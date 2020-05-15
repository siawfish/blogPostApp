import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { Ionicons, FontAwesome5, Feather, AntDesign } from '@expo/vector-icons'


export default class Blogpost extends Component {
    
    render() {
        const {item} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.topLeftSq}></View>
                <View style={styles.topMenu}>
                    <View style={styles.navigation}>
                        <Ionicons name="ios-arrow-back" size={35} color="#574f4f" />
                        <Text style={styles.back}>Heros</Text>
                    </View>
                    <View style={styles.iconsTray}>
                        <FontAwesome5 name="headphones-alt" size={30} color="#574f4f" />
                        <View style={styles.forSpace}>
                            <Feather name="heart" size={30} color="#574f4f" />
                        </View>
                        <AntDesign name="sharealt" size={30} color="#574f4f" />
                    </View>
                </View>

                <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    <Image style={styles.img} source={item.img)}/>
                    <View style={styles.captionContainer}>
                        <Text style={styles.caption} numberOfLines={3} >
                            {item.caption}
                        </Text>
                    </View>
                    <View style={styles.postInfo}>
                        <Image style={styles.avatar} source={require('../../assets/author.jpg')}/>
                        <Text style={styles.author}>{item.author}</Text>
                        <View style={styles.dot}></View>
                        <Text style={styles.timestamp}>{item.readTime}</Text>
                    </View>
                    <View style={styles.longTextContainer}>
                        <Text style={styles.longText}>
                            Excepteur incididunt veniam est incididunt do anim minim in ullamco magna voluptate.
                            Nulla amet cillum dolore aliquip dolore aute consequat aliqua duis esse esse. 
                            Enim id. 
                        </Text>
                    </View>
                    <View style={styles.longTextContainer}>
                        <Text style={styles.longText}>
                            Excepteur incididunt veniam est incididunt do anim minim in ullamco magna voluptate.
                        </Text>
                    </View>
                    <View style={styles.longTextContainer}>
                        <Text style={styles.longText}>
                            Excepteur incididunt veniam est incididunt do anim minim in ullamco magna voluptate.
                            Nulla amet cillum dolore aliquip dolore aute consequat aliqua duis esse esse. 
                        </Text>
                    </View>
                </ScrollView>
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
        width:200,
        backgroundColor:'red',
        opacity:0.7
    },

    topMenu: {
        flexDirection:'row',
        marginTop:60,
        paddingHorizontal:15,
        marginVertical:20,
        justifyContent:'space-between'
    },

    back: {
        color:'#574f4f',
        fontSize:28,
        fontWeight:'500',
        marginStart:10
    },

    navigation: {
        flexDirection:'row',
        alignItems:'center',
    },

    iconsTray:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    forSpace: {
        paddingHorizontal:15
    },

    img: {
        width:300,
        height:300,
        borderRadius:4
    },

    contentContainer: {
        alignSelf:'center',
        marginHorizontal:10,
        backgroundColor:'#fff',
        padding:10,
        borderRadius:4
    },

    caption: {
        fontSize:25,
        fontWeight: 'bold',
        marginVertical:15
    },

    captionContainer: {
        width:300
    },

    postInfo: {
        flexDirection:'row',
        alignItems:'center'
    },

    avatar: {
        width:30,
        height:30,
        borderRadius:15,
        marginEnd: 10
    },

    dot: {
        width:5,
        height:5,
        borderRadius:2.5,
        backgroundColor:'#aaa',
        marginEnd:5
    },

    timestamp: {
        fontSize:12,
        color:'red'
    },

    author: {
        marginEnd:15,
        fontSize:16
    },

    longTextContainer: {
        width:300,
        marginTop:20,
        paddingHorizontal:10
    },

    longText: {
        fontSize:16
    }
  })
