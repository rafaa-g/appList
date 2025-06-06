import React from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/Input";
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";

const data = [
    {
      item: 0,
      title: 'Realizar a lição de casa!',
      description: 'página 10 a 20',
      flag: 'urgente'
    },
    {
      item: 1,
      title: 'Passear com cachorro!',
      description: 'página 10 a 20',
      flag: 'urgente'
    },
    {
      item: 2,
      title: 'Sair para tomar açaí!',
      description: 'página 10 a 20',
      flag: 'urgente'
    }
  ];
  
  const _renderCard = (item) => {
    return (
        <TouchableOpacity style={style.card}>
            <View style={style.rowCard}>
                <View style={style.rowCardLeft}>
                    <Ball color='red'/>
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                </View>
                <Flag caption="Urgent" color={themas.colors.red}/>
            </View>
        </TouchableOpacity>
    )
  }

export default function List (){
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Hi Rafael, shall we take notes?</Text>
                <View style={style.boxInput}>
                    <Input 
                        IconLeft={MaterialIcons}
                        iconLeftName="search"
                    />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList 
                    data={data}
                    style={{marginTop:40, paddingHorizontal:30}}
                    keyExtractor={(item, index) =>item.item}
                    renderItem={({item, index}) => {
                        return (_renderCard(item))
                    }}
                />
            </View>
        </View>
    )
}