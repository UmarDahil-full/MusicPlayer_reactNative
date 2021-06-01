import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from '../../../assets/Ellipse64.png';
import heart from '../../../assets/heart.png';
import play from '../../../assets/play.png';
import points from '../../../assets/png.png';
import { Audio } from 'expo-av';
import pause from '../../../assets/pause.png'
import { useNavigation } from '@react-navigation/core';

export default function ListMusic() {
  const [sound, setSound] = useState(false);
  const [music, setMusic] = useState(false)
  const [data, setData] = useState([])
  const navigation = useNavigation()
 React.useEffect(()=>{
     setData(musics)
 },[musics])


let musics = [
    {
        id:1,
        name: 'Вера в любовь',
        description:'Abir Kasenov',
        played:false,
        path: require('../../../Musics/Доверие.mp3')

    },
    {
        id:2,
        name: 'Life',
        description:'Zivert',
        played:false,
        path: require('../../../Musics/Zivert-Life.mp3')  
    },
    {
        id:3,
        name: 'Капкан',
        description:'Mot',
        played:false,
        path: require('../../../Musics/Капкан.mp3')  
    }
]







    const playSound=async(id)=> {
        musics.forEach(async (el)=>{
            if(el.id == id){
                el.played=true
                 const { sound } = await Audio.Sound.createAsync(
                        el.path
                );
                setMusic(sound && sound);
        
                await sound.playAsync();
                setSound(true)
            }
        })
        setData(musics)
        if (music != null) {
            await music?.pauseAsync()
        }
    }

    const pauseMusic = async (id) => {
        
        setSound(false)
        musics.forEach(async (el)=>{
            if(el.id == id){
                el.played = false
            }})
            setData(musics)
        if (music != null) {
            await music?.pauseAsync()
        }
    }
 
    return (

         <View style={styles.container}>
            <View>
            <Text style={styles.name}>Lambada #420</Text>


            <View style={styles.threeBlocks}>
                <View style={styles.iconsBlock}>
                    <Image source={heart} style={styles.heart} />

                </View>
                 
                  
                
                <View style={styles.logoBlock}>
                    <Image source={logo} style={styles.logo} />

                </View>
                <View style={styles.iconsBlock}>
                <Image source={points} style={styles.points} />
                </View>
                

            </View>
            <View>
                <ScrollView style={styles.ScrollView}>
                    {data.map((el,i)=>{
                        return(
                            <TouchableOpacity
                            onPress={()=> navigation.navigate('Player',{music:el.id})}
                            style={i==music.length-1 ? styles.last: styles.songs}
                            >
                            <View>
                        
                             
                                    <Text style={styles.text}>{el.name} </Text>
                                    <Text style={styles.textunder}>{el.description}</Text> 
                                    </View>
                                 

                             <TouchableOpacity
                                 onPress={()=>{
                                    el.played ? pauseMusic(el.id) : playSound(el.id)
                                 }
                                
                            }
                                style={styles.play}>
                                    <Image source={el.played? pause: play} style={el.played? styles.pause: styles.playin} />
                                </TouchableOpacity>



                            </TouchableOpacity>
                         )
                    })

                    }



                 

                </ScrollView>
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#24282C',
        alignItems:'center',
    },
    nameBlock: {
        width: '100%'
    },
    
    name: {
        textAlign: 'center',
        color: '#73767A',
        fontSize: 14,
        marginTop: '15%'
    },
    threeBlocks: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 50,
        marginLeft:30
    },
    iconsBlock: {
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#292B31',
        width: 47,
        height: 47,
        borderRadius: 80,
        marginTop: 40,

    },
    logoBlock: {
        backgroundColor: '#292B31',
        width: 138,
        height: 138,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center'

    },
    playBlock: {
        backgroundColor: 'green',
        width: 47,
        height: 47,
        borderRadius: 80,
    },
    content: {
        marginLeft:0,
        width:'100%',
        marginBottom: '20%',
        height: 500,
    },
    ScrollView: {
        borderRadius:20,
        width: 400,
        marginTop:200,
        marginLeft:37,
        backgroundColor:'transparent'
    },
    songs: {
         width:"99%",        
        alignItems:'center',
         borderRadius:20,
        height:80,
        backgroundColor:'#1A1C1F',
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:10,
        marginLeft:2,
        marginTop: 10
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',


    },
    text:{
        color:'#9B9B9D'
    },
    textunder:{
        color:'#9B9B9D',
        opacity:0.2
    },
    heart: {
        width: 15,
        marginTop: 18,
        marginLeft: 15,
        height: 15
    },
    play:{
         width:40,
        height:40,
        backgroundColor:'#292B31',
        borderRadius:100
     },
     playin:{
         marginTop:11,
         marginLeft:11,
         width:20,
         height:20
     },
      
    points:{
        marginLeft:10,
        marginTop:20
    },
    pause:{
        marginLeft:8,
        marginTop:8,
         width:25,
        height:25,
        resizeMode:'contain',
      },
      
});