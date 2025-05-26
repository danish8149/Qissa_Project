import {StyleSheet} from 'react-native';
const stylesHome = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 80,
  },
  searchBarContainer: {
    marginBottom: 15,
    // marginTop: 5,
    // backgroundColor: 'green',
  },
  searchBarImg: {
    height: 22,
    width: 22,
    position: 'relative',
    top: 36,
    left: 10,
    zIndex: 1,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  horizontalScroll: {
    marginBottom: 10,
  },
  card: {
    marginRight: 15,
    width: 140,
    height: 170,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    height:60,
  },
  navCont: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'yellow',
    height:50
  },
  navItem: {
    fontSize: 12,
    fontWeight: '700',
    color: '#12202580',
  },
  /////////// Countries ///////////

  featuredCard: {
    marginRight: 15,
    width: 140,
    height: 170,
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
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    fontFamily: 'Rubik, Medium',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Rubik, Regular',
  },
});

export default stylesHome;
