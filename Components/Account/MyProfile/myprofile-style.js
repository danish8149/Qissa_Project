import {StyleSheet} from 'react-native';
const stylesMyProfile = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    // paddingTop: 50,
    // paddingBottom: 30,
    paddingHorizontal: 5,
    alignItems: 'center',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  arrowContainer: {
    // height: 100,
    // width: '100%',
  },
  arrow: {
    position: 'relative',
    height: 14,
    width: 20,
    right: 150,
    top: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 10,
    color: '#000000',
    fontFamily: 'Rubik, Medium',
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
    width: 400,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#122025',
    fontFamily:'Rubik, Medium',
    fontWeight:700
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderColor: '#0391B529',
    borderWidth: 1,
    marginBottom: 20,
    height: 55,
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
