import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: Dimensions.get('window').height/6,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: themas.colors.primary
    },
    greeting: {
        fontWeight: 'bold',
        fontSize: 20,
        color: themas.colors.secundary,
        marginTop: 20
    },
    boxInput: {
        width: '80%'
    },
    boxList: {
        flex: 1,
        width: '100%',
    },
    card: {
    width: '100%',
    minHeight: 80,
    backgroundColor: themas.colors.secundary,
    marginTop: 6,
    borderRadius: 10,
    padding: 15,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: themas.colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
},
    contentButton: {
        flex: 1
    },
    rowCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    textContainer: {
        flex: 1
    },
    titleCard: {
        fontSize: 16,
        fontWeight: 'bold',
        color: themas.colors.dark
    },
    descriptionCard: {
        color: themas.colors.gray,
        fontSize: 14,
        marginTop: 4
    },
    dateCard: {
        color: themas.colors.gray,
        fontSize: 12,
        marginTop: 4,
        fontStyle: 'italic'
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: themas.colors.gray,
        fontSize: 16,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 10,
        color: themas.colors.dark
    }
});