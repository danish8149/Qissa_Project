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
    paddingBottom: 30,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: '60%',
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
    marginRight:3,
  
  },
  title: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Optima,Regular',
  },
  subtitle: {
    fontSize: 14,
    color: '#d0f0f0',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'Rubik, Light',
  },
  button: {
    backgroundColor: '#FFB100',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Rubik, SemiBold',
  },
  termsText: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'center',
    fontFamily: 'Rubik, Regular',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

export default styles;
