import {StyleSheet} from 'react-native';
const stylesresetpassword = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    backgroundColor: '#DDF6FF',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    flex: 1,
  },
  //   topSection: {
  //     paddingTop: 50,
  //     paddingBottom: 30,
  //     paddingHorizontal: 20,
  //     borderBottomLeftRadius: 20,
  //     borderBottomRightRadius: 20,
  //   },
  title: {
    fontSize: 35,
    fontWeight: '700',
    marginTop: 20,
    color: '#122025',
    fontFamily: 'Optima, Bold',
  },
  form: {
    paddingTop: 50,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 5,
    color: '#122025',
    fontFamily: 'Rubik, Medium',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#0391B529',
    width: '100%',
    height: 55,
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0391B5',
    paddingVertical: 14,
    borderRadius: 28,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
    fontFamily: 'Rubik, SemiBold',
  },
});

export default stylesresetpassword;
