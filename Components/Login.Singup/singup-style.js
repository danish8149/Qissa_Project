import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const stylesSingup = StyleSheet.create({

 
  form: {
    // marginTop: 5,
  },
  label: {
    fontSize: 15,
    marginTop: 15,
    fontFamily: 'Rubik-Medium',
    color: '#122025',
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
  signupBtn: {
    backgroundColor:'#0391B5',
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
    shadowOpacity:  0.1,
    shadowRadius: 3.05,
    //elevation: 4
    
  },
  signupBtnText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Rubik-SemiBold',
    
  },
  
});
export default stylesSingup;
