import {StyleSheet} from 'react-native';
const stylesVerificationCode = StyleSheet.create({
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#122025',
    marginTop: 15,
    fontFamily: 'Optima, Bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#122025BF',
    marginTop: 5,
    fontFamily: 'Rubik, Regular',
  },
  body: {
    paddingHorizontal: 20,
    marginTop: 60,
    alignItems: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 30,
  },
  codeInput: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderColor: '#0391B529',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0391B5',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resendText: {
    marginTop: 20,
    color: '#12202580',
    fontSize: 14,
    fontFamily: 'Rubik, Medium',
    fontWeight: 700,
  },
});

export default stylesVerificationCode;
