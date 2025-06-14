import React from "react";
import { TouchableOpacity, View } from 'react-native'
import { style } from "./styles";
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default ({ state, navigation }) => {
    const go = (screenName) => {
        if (screenName === "List" || screenName === "NewList") {
            navigation.navigate("MainStack", { screen: screenName });
        } else {
            navigation.navigate(screenName);
        }
    }

    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={() => go("List")}>
                <AntDesign
                    name="bars"
                    style={{ opacity: state.index === 0 ? 1 : 0.3, color: themas.colors.primary, fontSize: 32 }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItemButton} onPress={() => go("NewList")}>
                <View style={{ width: '100%', left: 10, top: 4 }}>
                    <Entypo name="plus" size={40} />
                </View>
                <View style={{ flexDirection: 'row-reverse', width: '100%', right: 10, bottom: 10 }}>
                    <MaterialIcons 
                        name="edit" 
                        style={{ color: '#FFF' }} 
                        size={30} 
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => go("User")}>
                <AntDesign
                    name="user"
                    style={{ opacity: state.index === 1 ? 1 : 0.3, color: themas.colors.primary, fontSize: 32 }}
                />
            </TouchableOpacity>
        </View>
    )
}