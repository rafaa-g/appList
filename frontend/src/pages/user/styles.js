import { StyleSheet } from 'react-native';
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themas.colors.bgScreen,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: themas.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    iconText: {
        color: themas.colors.secundary,
        fontSize: 36,
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: themas.colors.dark,
        marginBottom: 5,
        textAlign: 'center',
    },
    emailText: {
        fontSize: 16,
        color: themas.colors.gray,
        textAlign: 'center',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.red,
        padding: 15,
        borderRadius: 8,
        width: '80%',
    },
    logoutText: {
        color: themas.colors.secundary,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
});