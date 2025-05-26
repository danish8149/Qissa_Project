import { StyleSheet } from "react-native";
const stylesMyProfile = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
  },
  header: {
    // paddingTop: 50,
    // paddingBottom: 30,
    paddingHorizontal: 5,
    alignItems: 'center',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    color: '#000',
  },
  profileImageContainer: {
    marginTop: 20,
    alignItems: 'center',
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },
  body: {
    paddingHorizontal: 20,
    marginTop: 30,
    width:400
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#00ADEF',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default stylesMyProfile;