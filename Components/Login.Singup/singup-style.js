import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const stylesSingup = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#ffffff',
  // },
  // header: {
  //   backgroundColor: '#04354b',
  //   paddingTop: 60,
  //   paddingHorizontal: 24,
  //   paddingBottom: 40,
  //   borderBottomLeftRadius: 30,
  //   borderBottomRightRadius: 30,
  // },
  // logo: {
  //   color: '#fff',
  //   fontSize: 28,
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  // },
  // title: {
  //   color: '#fff',
  //   fontSize: 22,
  //   fontWeight: '600',
  //   marginBottom: 4,
  // },
  // subtitle: {
  //   color: '#d0dce0',
  //   fontSize: 12,
  // },
  // tabs: {
  //   flexDirection: 'row',
  //   backgroundColor: '#d6f2f9',
  //   borderRadius: 30,
  //   marginBottom: 20,
  //   overflow: 'hidden',
  // },
  // tab: {
  //   flex: 1,
  //   paddingVertical: 10,
  //   alignItems: 'center',
  // },
  // activeTab: {
  //   backgroundColor: '#FFFFFF',
  // },
  // inactiveTab: {
  //   backgroundColor: '#0000000D',
  // },
  // tabText: {
  //   fontWeight: '600',
  //   color: '#04354b',
  // },
  // activeTabText: {
  //   color: '#000',
  //   fontWeight: '700',
  //   fontFamily: 'Rubik, SemiBold',
  //   fontSize: 15,
  // },
  // inactiveTabText: {
  //  color: '#12202580',
  //   fontWeight: '700',
  //   fontFamily: 'Rubik, Medium',
  //   fontSize: 15,
  // },
  form: {
    // marginTop: 5,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Rubik, Medium',
    color: '#122025',
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
  signupBtn: {
    backgroundColor: '#007ea7',
    padding: 14,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 25,
    // elevation: 3,
  },
  signupBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Rubik, SemiBold',
  },
});
export default stylesSingup;
