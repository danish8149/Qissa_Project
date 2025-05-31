import {StyleSheet} from 'react-native';
const stylesForgotPassword = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#122025',
    marginTop: 15,
    fontFamily: 'Optima, Bold',
  },
  subtitle: {
    fontSize: 15,
    color: '#122025BF',
    marginTop: 5,
    fontFamily: 'Rubik, Regular',
    fontWeight: 600,
  },
  body: {
    // paddingHorizontal: 20,
    marginTop: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#000000',
    fontFamily: 'Rubik, Medium',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderColor: '#0391B529',
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0391B5',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#00000029',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Rubik, SemiBold',
  },
  backLogin: {
    color: '#0391B5',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Rubik, Medium',
    fontWeight: 700,
  },
});

export default stylesForgotPassword;
