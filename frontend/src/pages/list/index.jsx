import React, { useState } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/Input";
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import { Ball } from "../../components/Ball";
import { themas } from "../../global/themes";

const initialData = [
    {
      id: 0,
      title: 'Realizar a lição de casa!',
      description: 'página 10 a 20',
    },
    {
      id: 1,
      title: 'Passear com cachorro!',
      description: 'página 10 a 20',
    },
    {
      id: 2,
      title: 'Sair para tomar açaí!',
      description: 'página 10 a 20',
    }
];

export default function List({ route }) {
    const [data, setData] = useState(initialData);
    
    React.useEffect(() => {
        if (route.params?.newNote) {
            setData(prevData => [
                ...prevData,
                {
                    id: prevData.length,
                    title: route.params.newNote.title,
                    description: route.params.newNote.description,
                }
            ]);
        }
    }, [route.params?.newNote]);

    const _renderCard = (item) => {
        return (
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                    <View style={style.rowCardLeft}>
                        <Ball color='gray'/>
                        <View>
                            <Text style={style.titleCard}>{item.title}</Text>
                            <Text style={style.descriptionCard}>{item.description}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Olá Rafael, alguma nota hoje?</Text>
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
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => _renderCard(item)}
                />
            </View>
        </View>
    )
}