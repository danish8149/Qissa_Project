import StyleSheet from 'react-native/Libraries/StyleSheet/StyleSheet';
const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 90,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  logoContainer: {
    height: 70,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 30,
    height: 50,
    width: 100,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Optima, Bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Rubik, Regular',
    paddingBottom: 10,
  },
  card: {
    marginTop: -15,
    flex: 1,
  },
  gradiant: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 40,
  },
  form: {
    padding: 20,
  },
  toggleButtons: {
    flexDirection: 'row',
    backgroundColor: '#0000000D',
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 20,
    padding: 5,
  },
  toggleActive: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 30,
  },
  toggleInactive: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  toggleTextActive: {
    color: '#000',
    fontWeight: '700',
    fontFamily: 'Rubik, SemiBold',
    fontSize: 15,
  },
  toggleTextInactive: {
    color: '#12202580',
    fontWeight: '700',
    fontFamily: 'Rubik, Medium',
    fontSize: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Rubik, Medium',
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 12,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#0391B529',
    height: 50,
  },
  rememberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#0391B529',
  },
  rememberText: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: 'Rubik, Regular',
    color: '#12202580',
    fontWeight: 'bold',
  },
  forgotText: {
    fontSize: 14,
    color: '#0391B5',
    fontWeight: 'bold',
    fontFamily: 'Rubik, Medium',
  },
  loginButton: {
    backgroundColor: '#007ea7',
    padding: 14,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 25,
    // elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  guestButton: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 25,
    // elevation: 4,
    borderWidth: 1,
    borderColor: '#D4D5D5',
  },
  guestButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Rubik, Medium',
  },
});
export default stylesLogin;
