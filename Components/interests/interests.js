import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Pressable,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const interests = [
  {
    id: '1',
    title: 'Historical',
    image: require('../assest/history.png'),
  },
  {
    id: '2',
    title: 'Art & Culture',
    image: require('../assest/arts.culture.png'),
  },
  {
    id: '3',
    title: 'Foods',
    image: require('../assest/food.png'),
  },
  {
    id: '4',
    title: 'Architecture',
    image: require('../assest/architecture.png'),
  },
];

const InterestScreen = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = id => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  const renderItem = ({item}) => {
    const isSelected = selected.includes(item.id);
    return (
      <TouchableOpacity
        style={[styles.card, isSelected && styles.cardSelected]}
        onPress={() => toggleSelect(item.id)}>
        <Image source={item.image} style={styles.image} />
        {isSelected && (
          <View style={styles.checkIcon}>
            {/* <Icon name="checkmark" size={20} color="#fff" /> */}
            <ImageBackground
              source={require('../assest/check_circle.png')}
              style={{height: 20, width: 20}}></ImageBackground>
          </View>
        )}
        <View style={styles.overlay}>
          <Text style={styles.cardText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable>
          {/* <Icon name="arrow-back" size={24} color="#000" /> */}
          <ImageBackground
            source={require('../assest/backsp.png')}
            style={{height: 14, width: 20}}></ImageBackground>
        </Pressable>
        <Text style={styles.title}>Which area interests you the most?</Text>
        <Text style={styles.subtitle}>
          You can choose more than one option.
        </Text>
      </View>

      <FlatList
        data={interests}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipBtn}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InterestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F9FF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginTop: 10,
    fontFamily: 'Optima, Bold',
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    marginTop: 4,
    fontFamily: 'Rubik, Regular',
  },
  grid: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    width: '48%',
    height: 160,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: '#00BCD4',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  cardText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Rubik, Medium',
  },
  checkIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#00BCD4',
    borderRadius: 12,
    padding: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 30,
  },
  skipBtn: {
    flex: 1,
    marginRight: 10,
    borderColor: '#D4D5D5',
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  nextBtn: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#0391B5',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  skipText: {
    color: '#000',
    fontWeight: '700',
  },
  nextText: {
    color: '#fff',
    fontWeight: '700',
  },
});
