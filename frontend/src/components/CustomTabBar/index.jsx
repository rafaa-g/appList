import React, { useContext } from "react";
import {Text, Touchable, TouchableOpacity, View} from 'react-native'
import {style} from "./styles";
import {AntDesign, FontAwesome, Entypo, MaterialIcons} from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";

export default({state, navigation})=> {

    const { onOpen } = useContext(AuthContextList);

    const go = (screenName)=> {
        navigation.navigate(screenName)

    }

    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=> go("List")}>
                <AntDesign
                    name="bars"
                    style={{opacity:state.index === 0? 1: 0.3, color:themas.colors.primary, fontSize:32}}
                    />
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItemButton} onPress={()=>onOpen()}>
                <View style={{width:'100%', left:10, top:4}}>
                    <Entypo 
                        name="plus"
                        size={40}
                    />
                </View>
                <View style={{flexDirection:'row-reverse', width:'100%', right:10, bottom:10}}>
                    <MaterialIcons
                        name="edit"
                        style={{color:'#FFF'}}
                        size={30}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={()=> go("User")}>
            <AntDesign
                    name="user"
                    style={{opacity:state.index === 1? 1: 0.3, color:themas.colors.primary, fontSize:32}}
                    />
            </TouchableOpacity>
        </View> 
    )
}