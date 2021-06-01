import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import arrow from '../../../assets/arrow.png'
import logo from '../../../assets/Ellipse64.png';
import tripalki from '../../../assets/tripalki.png'
import pause from '../../../assets/pause.png'
import next from '../../../assets/Union.png'
import previous from '../../../assets/Union1.png'
import { useNavigation } from '@react-navigation/core';



export default function Player({route}) {
        const [sound, setSound] = useState(false);
        const [music, setMusic] = useState(false)
        const [data, setData] = useState({})
       React.useEffect(()=>{
           
           musics.map(el=>{
               if(el.id == route.params?.music){
                   setData(el)
               }
           })
           
       },[route.params?.music])
      
      
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

          const navigation = useNavigation()
    return (
        
        <View style={styles.continer}>
        <View>

        <Text style={styles.name}>Lambada #420</Text>
<View style={styles.threeBlocks}>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.iconsBlock}>
            <Image source={arrow} style={styles.arrow} />

        </TouchableOpacity>
         
          
        
        <View style={styles.logoBlock}>
            <Image source={logo} style={styles.logo} />

        </View>
        <View style={styles.iconsBlock}>
        <Image source={tripalki} style={styles.tripalki} />
        </View>
        
        

    </View>
       
    <Text style={styles.nameofmusic}>{data&& data.name} </Text>
    <Text style={styles.artistsofmusic}>{data&&data.description}</Text>
    
    <View style={styles.threeBlocks}>
        <View style={styles.iconsBlock1}>
            <Image source={previous} style={styles.next} />
 
        </View>
         
          
        
        <View style={styles.stopBlock}>
            <Image source={pause} style={styles.pause} />

        </View>
        <View style={styles.iconsBlock1}>
        <Image source={next} style={styles.previous} />
        </View>
        
        

    </View>
 
    </View>
    </View>
    )
}


const styles = StyleSheet.create({
    continer:{
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
        marginTop: 80
    },
    threeBlocks: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginLeft: '7%',
        marginTop:-35
        

    },
     
     
iconsBlock: {
        
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    zIndex:123,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#292B31',
    width: 37,
    height: 37,
    borderRadius: 80,
    marginTop: 10,
 
},
logoBlock: {
    marginTop:180,
    marginLeft:25,
    backgroundColor: '#292B31',
    width: 138,
    height: 138,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center'

},

arrow:{
    marginTop:11,
    marginLeft:11
},
tripalki:{
    marginTop:14,
    marginLeft:10
},


logo:{
    width: 468,
    height:468
},
nameofmusic:{
    marginTop:90,
textAlign:'center',
color:'#9B9B9D',
fontSize: 38,
 
},

artistsofmusic:{
    textAlign:'center',

     fontSize:18,
    color:'#C2CDDF'
},

pause:{
    marginTop:22,
    marginLeft:22,
    width:29,
    height:29

},
iconsBlock1: {
        
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#292B31',
    width: 74,
    height: 74,
    borderRadius: 80,
    marginTop: 220,
 
},
stopBlock: {
        
    shadowColor: "#E8510D",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#E8510D',
    width: 74,
    height: 74,
    borderRadius: 80,
    marginTop: 220,
 
},
next:{
    marginTop:27,
    marginLeft:17

},
previous:{
    marginTop:27,
    marginLeft:23
}


})

