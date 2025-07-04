import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        paddingHorizontal: 37
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: themas.colors.lightGray,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: themas.colors.lightGray
    },
    checkLogo: {
        width: 80,
        height: 80,
        marginTop: 40
    },
    text: {
        marginTop: 35,
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 40
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20
    },
    textButton: {
        fontSize: 16,
        color: '#FFFF',
        fontWeight: 'bold'
    },
    button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginBottom: 15,
    },
    cancelButton: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.gray,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    registerText: {
        marginTop: 20,
        color: themas.colors.primary,
        textDecorationLine: 'underline'
    }
});