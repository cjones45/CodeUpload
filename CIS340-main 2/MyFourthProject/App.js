import React from 'react';
import {Text, View,SectionList } from 'react-native';


export default StatesApp = () => {
  return(

    <ScrollView style={{padding:40}}>
      <View style={{flex: 1, PaddingTop: 22}}> 
      <SectionList
      sections={[

        {title: 'A', data: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']},
{title: 'C', data: ['California', 'Colorado', 'Connecticut']},
{title: 'D', data: ['Delaware']},
{title: 'F', data: ['Florida']},
{title: 'G', data: ['Georgia']},
{title: 'H', data: ['Hawaii']},
{title: 'I', data: ['Idaho', 'Illinois', 'Indiana', 'Iowa']},
{title: 'K', data: ['Kansas', 'Kentucky']},
{title: 'L', data: ['Louisiana']},
{title: 'M', data: ['Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana']},
{title: 'N', data: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota']},
{title: 'O', data: ['Ohio', 'Oklahoma', 'Oregon']},
{title: 'P', data: ['Pennsylvania']},
{title: 'R', data: ['Rhode Island']},
{title: 'S', data: ['South Carolina', 'South Dakota']},
{title: 'T', data: ['Tennessee', 'Texas']},
{title: 'U', data: ['Utah']},
{title: 'V', data: ['Vermont', 'Virginia']},
{title: 'W', data: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']},
      ]}
     
    renderItem={({item}) => <Text style =  {{padding: 10, fontSize: 20, height: 44}}> {item} </Text> }
    renderSectionHeader={({section}) => <Text style = {{paddingTop: 4, paddingLeft: 10,
       PaddingRight:10, PaddingBottom: 4, fontSize:14, fontWeight:'bold',backgroundColor:'801299' }}>{section.title}</Text>}
       keyExtractor={(item,index) => index}
   
     />
</View>
</ScrollView>

      

);
    }