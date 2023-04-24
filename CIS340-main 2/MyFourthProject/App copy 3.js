import React from 'react';
import {Text, Image,ScrollView } from 'react-native';

const dog ={
  uri: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e',
  width: 64,
  height: 64

};

export default MyScrollViewApp = () => (

    <ScrollView style={{padding:40}}>
      <Text style={{fontSize: 80}}> try to scroll down </Text>
      <Image source={require('./assets/dog2.png')} style={{width: 64, height: 64}}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <Text style={{fontSize: 80}}> try to scroll down again </Text>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <Text style={{fontSize: 80}}> try to scroll down </Text>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <Text style={{fontSize: 80}}> try to scroll down </Text>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <Text style={{fontSize: 80}}> React native </Text>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>
      <image source={dog}/>


      </ScrollView>
  
);

 
