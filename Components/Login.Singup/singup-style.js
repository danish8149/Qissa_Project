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
  activeTab: {
    backgroundColor: '#fff',
  },
  inactiveTab: {
    backgroundColor: '#d6f2f9',
  },
  tabText: {
    fontWeight: '600',
    color: '#04354b',
  },
  activeTabText: {
    color: '#04354b',
  },
  inactiveTabText: {
    color: '#999',
  },
  form: {
    marginTop: 10,
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
  signupBtn: {
    marginTop: 24,
    backgroundColor: '#007ea7',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#009ecf',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  signupBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default stylesSingup;
