import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

export default class Discover extends Component {
    goToPost = ()=>{
        const { item, navigation} = this.props
        navigation.navigate('Blog Post', {
            img: item.img,
            caption: item.caption,
            author: item.author,
            avatar: item.authorImg,
            timestamp: item.readTime
        })
    }
    render() {
        const { item } = this.props
        return (
            <TouchableOpacity onPress={this.goToPost}  style={styles.container}>
                <View style={styles.smallSq}></View>
                <View style={styles.contentContainer}>
                    <View style={styles.imgContainer}>
                        <Image source={item.img} style={styles.img}/>
                    </View>
                    <View style={styles.contentInfoContainer}>
                        <Text style={styles.caption} numberOfLines={3}>
                            {item.caption}
                        </Text>
                        <View style={styles.contentAuthorContainer}>
                            <Image source={item.authorImg} style={styles.avatar}/>
                            <Text style={styles.author} numberOfLines={1}>{item.author}</Text>
                            <View style={styles.dot}></View>
                            <Text style={styles.timestamp}>{item.readTime}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 150,
      flexDirection:'row',
      backgroundColor: '#fff',
      marginVertical:5,
      marginHorizontal:10,
      justifyContent: 'center',
      borderRadius:4,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    smallSq: {
        backgroundColor:'red',
        width:75,
        height:95,
        position:'absolute',
        top:0,
        left:0,
        borderTopLeftRadius:4,
        opacity:0.7
    },

    contentContainer: {
        flexDirection:'row',
        height:130,
        backgroundColor:'#fff',
        flex:1,
        marginHorizontal:10,
        marginVertical:10,
        paddingVertical: 5,
        paddingHorizontal: 5
    },

    img: {
        width:120,
        height:120
    },

    contentInfoContainer: {
        flexDirection:'column',
        width:200,
        marginHorizontal:10,
        justifyContent:'space-between'
    },

    caption: {
        fontSize:20,
        fontWeight: 'bold',
    },

    contentAuthorContainer: {
        flexDirection:'row',
        alignItems:'center'
    },

    avatar: {
        width:30,
        height:30,
        borderRadius:15,
        marginEnd:5
    },

    author: {
        width:70,
        marginEnd:10,
        fontSize:16
    },

    dot: {
        width:5,
        height:5,
        borderRadius:2.5,
        backgroundColor:'#aaa',
        marginEnd:10
    },

    timestamp: {
        fontSize:12,
        color:'red'
    }
  })
