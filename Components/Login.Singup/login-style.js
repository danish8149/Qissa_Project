import StyleSheet from 'react-native/Libraries/StyleSheet/StyleSheet';
const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#D0F6FD',
  },
  header: {
    // backgroundColor: '#126782',
    paddingTop: 90,
    paddingHorizontal: 20,
    paddingBottom: 40,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Optima, Bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Rubik, Regular',
    paddingBottom:20
  },
  card: {
    marginTop: -25,
    backgroundColor: '#D0F6FD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 5,
    flex: 1,
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
  },
  toggleTextInactive: {
    color: '#666',
    fontWeight: '600',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Rubik, Medium',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 12,
    marginTop: 5,
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
  rememberText: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: 'Rubik, Regular',
    color: '#12202580',
    fontWeight: 'bold',
  },
  forgotText: {
    fontSize: 12,
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
    elevation: 4,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default stylesLogin;
