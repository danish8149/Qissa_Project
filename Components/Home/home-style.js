import {StyleSheet} from 'react-native';
const stylesHome = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollContent: {
    // padding: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    // paddingBottom: 80,
  },
  searchBarContainer: {
    marginBottom: 15,
    // marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  logo: {
    // marginBottom: 10,
    height: 50,
    width: 100,
  },
  searchBarImg: {
    height: 22,
    width: 22,
    top: 20,
    right: 20,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    borderColor: '#0391B529',
    borderWidth: 1,
    color: '#000',
    height: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#122025',
  },
  horizontalScroll: {
    marginBottom: 10,
  },
  card: {
    marginRight: 15,
    width: 160,
    height: 170,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#122025',
    fontFamily: 'Rubik, Medium',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#12202580',
    fontFamily: 'Rubik, Regular',
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    height: 80,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#12202580',
  },

  navCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  navImage: {
    width: 26,
    height: 26,
    marginBottom: 5,
    resizeMode: 'contain',
  },

  navItem: {
    fontSize: 12,
    fontWeight: '700',
    color: '#12202580',
    fontFamily: 'Rubik, Medium',
  },
  navItem1: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0391B5',
    fontFamily: 'Rubik, Medium',
  },

  /////////// Countries ///////////

  featuredCard: {
    marginRight: 15,
    width: 180,
    height: 180,
    borderRadius: 16,
  },
  featuredImageWrapper: {
    width: '100%',
    height: 130,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Times New Roman, Bold',
  },
  feauturedcardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    fontFamily: 'Rubik, Medium',
    color: '#122025',
  },
  feauturedcardSubtitle: {
    fontSize: 12,
    color: '#12202580',
    fontFamily: 'Rubik, Regular',
  },
});

export default stylesHome;
