import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themas.colors.primary,
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themas.colors.text,
    marginBottom: 8,
  },
  titleInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  descriptionInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    height: 120,
    textAlignVertical: 'top',
  },
  flagContainer: {
    marginBottom: 25,
  },
  flagOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '48%',
    justifyContent: 'center',
  },
  urgentFlag: {
    backgroundColor: '#FF3B30',
  },
  normalFlag: {
    backgroundColor: '#007AFF',
  },
  flagText: {
    color: '#FFF',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  dateInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  dateText: {
    fontSize: 16,
    color: themas.colors.text,
  },
  saveButton: {
    backgroundColor: themas.colors.primary,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});