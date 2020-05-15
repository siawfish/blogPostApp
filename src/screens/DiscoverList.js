import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Text, FlatList } from 'react-native'
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons'
import Discover from '../components/Discover'


export default class DiscoverList extends Component {
    render() {
        const blogs = [
            {img:require('../../assets/ironman.jpg'), caption:'When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape.', readTime:'4 mins read', author:'Gerald Amanor', authorImg:require('../../assets/author.jpg')},
            {img:require('../../assets/Captian.jpg'), caption:'During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body.', readTime:'10 mins read', author:'Kofi Siaw', authorImg:require('../../assets/author.jpg')},
            {img:require('../../assets/hulk.jpg'), caption:'Scientist Bruce Banner is exposed to gamma radiation which has its unique side effect.', readTime:'5 mins read', author:'Richard Amanor', authorImg:require('../../assets/author.jpg')},
            {img:require('../../assets/blackwidow.jpg'), caption:'At birth the Black Widow (aka Natasha Romanova) is given to the KGB, which grooms her to become its ultimate operative.', readTime:'2 mins read', author:'Riane Amanor', authorImg:require('../../assets/author.jpg')},
            {img:require('../../assets/thor.jpg'), caption:'Thor is a 2011 American superhero film based on the Marvel Comics character of the same name.', readTime:'7 mins read', author:'Amma Darkoa', authorImg:require('../../assets/author.jpg')},
            {img:require('../../assets/spiderman.jpg'), caption:'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko.', readTime:'3 mins read', author:'Jerome Amanor', authorImg:require('../../assets/author.jpg')}
        ]
        const {navigation} = this.props
        return (
            <View style={styles.container}>

                <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={blogs}
                        renderItem={({item})=><Discover navigation={navigation} item={item}/>}
                        keyExtractor={(item, index) => index}
                    />
                </ScrollView>

                <View style={styles.bottomPane}>
                    <AntDesign name="home" size={24} color="red" />
                    <FontAwesome name="folder-open-o" size={24} color="black" />
                    <Entypo name="heart-outlined" size={24} color="black" />
                    <AntDesign name="user" size={24} color="black" />
                    <AntDesign name="setting" size={24} color="black" />
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

    bottomPane: {
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        width:'100%',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal:20,
        backgroundColor:'#fff'
    },

    listContainer: {
        backgroundColor:'#d0d0d0',
        marginBottom:20
    }
  })
