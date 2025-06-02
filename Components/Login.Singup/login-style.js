import StyleSheet from 'react-native/Libraries/StyleSheet/StyleSheet';
const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFFF',
    height:'100%'

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
    fontFamily: 'Optima-bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Rubik-Regular',
    paddingBottom: 15,
  },
 
  card: {
    marginTop: -15,
    flex: 1,
   
  },
 
  gradiant: {
   borderRadius: 20,
    height: '100%',
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
    color: '#00627B000',
    fontFamily: 'Rubik-SemiBold',
    fontSize: 15,
  },
  toggleTextInactive: {
    color: '#12202580',
    fontFamily: 'Rubik-Medium',
    fontSize: 15,
  },
  label: {
    fontSize: 15,
    marginTop: 15,
   fontFamily: 'Rubik-Medium',
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 12,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#0391B529',
    height: 55,
  },
  rememberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
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
    fontFamily: 'Rubik-Regular',
    color: '#12202580',
  },
  forgotText: {
    fontSize: 14,
    color: '#0391B5',
    fontFamily: 'Rubik-Medium',
  },
  loginButton: {
    backgroundColor: '#0391B5',
    padding: 18,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 32,
    height: 55,
    shadowColor: "#000000",
   shadowOffset: {
    width: 0,
    height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    //elevation: 4
    
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Rubik-SemiBold',
  },
  guestButton: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 32,
    // elevation: 4,
    borderWidth: 1,
    borderColor: '#D4D5D5',
    height: 55,
  },
  guestButtonText: {
    color: '#122025',
    fontSize: 15,
    fontFamily: 'Rubik-SemiBold',
   },
});
export default stylesLogin;
