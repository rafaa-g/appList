import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.colors.bgScreen,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themas.colors.primary,
    marginBottom: 30,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 25,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: themas.colors.dark,
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    backgroundColor: themas.colors.secundary,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: themas.colors.dark,
    borderWidth: 1,
    borderColor: themas.colors.lightGray,
    width: '100%',
  },
  multilineInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  dateInput: {
    backgroundColor: themas.colors.secundary,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: themas.colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: themas.colors.dark,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
  },
  button: {
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  cancelButton: {
    backgroundColor: themas.colors.secundary,
    borderWidth: 1,
    borderColor: themas.colors.lightGray,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: themas.colors.primary,
    marginLeft: 10,
  },
  saveButtonText: {
    color: themas.colors.secundary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: themas.colors.dark,
    fontSize: 16,
    fontWeight: '600',
  },
});