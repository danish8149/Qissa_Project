import StyleSheet from 'react-native/Libraries/StyleSheet/StyleSheet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: '80%',
    width: '100%',
  },
  logo: {
    height: 125, 
    width: 170, 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  logoimage: {
    height: '65%',
    width: '80%',
    resizeMode: 'contain',
  
  },
  title: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Optima',
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 50,
    fontFamily: 'Rubik-Light',
  },
  button: {
    backgroundColor: '#FFB100',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'Rubik-SemiBold',
  },
  termsText: {
    fontSize: 12,
    color: '#FFFFFF80',
    textAlign: 'center',
    fontFamily: 'Rubik-Regular',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

export default styles;
