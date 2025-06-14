import { StyleSheet, Dimensions } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: Dimensions.get('window').height/7,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: themas.colors.primary,
        paddingTop: 7
    },
    greeting: {
        fontWeight: 'bold',
        fontSize: 20,
        color: themas.colors.secundary,
        marginTop: 20,
        marginBottom: 15
    },
    searchContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20
    },
    searchBox: {
        width: '100%',
        height: 40,
        backgroundColor: themas.colors.secundary,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: themas.colors.lightGray,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        paddingLeft: 10,
        color: themas.colors.dark,
        includeFontPadding: false,
        textAlignVertical: 'center',
    },
    searchIcon: {
        marginRight: 8,
    },
    boxList: {
        flex: 1,
        width: '100%',
    },
    list: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    card: {
        width: '100%',
        minHeight: 80,
        backgroundColor: themas.colors.secundary,
        marginTop: 10,
        borderRadius: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: themas.colors.lightGray,
        flexDirection: 'row',
        alignItems: 'center'
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
    }
});