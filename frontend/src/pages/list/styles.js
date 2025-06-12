import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style= StyleSheet.create({
   container:{
      flex:1,
      alignItems:'center'
   },
   header:{
      width:'100%',
      height:Dimensions.get('window').height/6,
      paddingHorizontal:20,
      justifyContent:'center',
      backgroundColor:themas.colors.primary
   },
   greeting:{
      fontWeight:'bold',
      fontSize:20,
      color:'FFFF',
      marginTop:20
   },
   boxInput:{
      width:'80%'
   },
   boxList:{
      flex:1,
      width:'100%',
   },
   card:{
      width:'100%',
      height:60,
      backgroundColor:'#FFF',
      marginTop:6,
      borderRadius:10,
      justifyContent:'center',
      padding:10,
      borderWidth:1,
      borderColor:themas.colors.lightGray
   },
   rowCard:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
   },
   rowCardLeft:{
      width:'70%',
      flexDirection:'row',
      alignItems:'center',
      gap:10
   },
   titleCard:{
      fontSize:16,
      fontWeight:'bold'
   },
   descriptionCard:{
      color:themas.colors.gray
   },
   searchInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    color: themas.colors.dark
   },
   noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    color: themas.colors.gray,
    fontSize: 16,
   },
})