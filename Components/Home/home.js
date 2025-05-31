import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import stylesHome from './home-style';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const renderCard = (title, subtitle, image) => (
    <View style={stylesHome.card}>
      <Image
        source={typeof image === 'string' ? {uri: image} : image}
        style={stylesHome.image}
      />
      <Text style={stylesHome.cardTitle}>{title}</Text>
      <Text style={stylesHome.cardSubtitle}>{subtitle}</Text>
    </View>
  );

  const renderFeaturedCard = (title, subtitle, image) => (
    <View style={stylesHome.featuredCard}>
      <View style={stylesHome.featuredImageWrapper}>
        <Image source={image} style={stylesHome.featuredImage} />
        <View style={stylesHome.overlay}>
          <Text style={stylesHome.featuredTitle}>{title}</Text>
        </View>
      </View>
      <Text style={stylesHome.feauturedcardTitle}>{title}</Text>
      <Text style={stylesHome.feauturedcardSubtitle}>{subtitle}</Text>
    </View>
  );

  return (
    <View style={stylesHome.wrapper}>
      <LinearGradient colors={['#D0F6FD', '#FFFFFF', '#FFFFFF']}>
        <ScrollView contentContainerStyle={stylesHome.scrollContent}>
          <View style={stylesHome.searchBarContainer}>
            <Image
              source={require('../assest/logo.png')}
              style={stylesHome.logo}
              resizeMode="contain"
            />
            <ImageBackground
              source={require('../assest/search_2.png')}
              style={stylesHome.searchBarImg}
            />
            {/* <TextInput
              style={stylesHome.searchBar}
              placeholder="         Search Stories"
              placeholderTextColor="#888"
            /> */}
          </View>

          <Text style={stylesHome.sectionTitle}>Featured Countries</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={stylesHome.horizontalScroll}>
            {renderFeaturedCard(
              'Qatar',
              'Qissa Guide',
              require('../assest/Qatar.png'),
            )}
            {renderFeaturedCard(
              'Saudi Arabia',
              'Qissa Guide',
              require('../assest/Saudi_Arabia.png'),
            )}
            {renderFeaturedCard(
              'Oman',
              'Qissa Guide',
              require('../assest/Oman.png'),
            )}
            {renderFeaturedCard(
              'Egypt',
              'Qissa Guide',
              require('../assest/Egypt.png'),
            )}
          </ScrollView>

          <Text style={stylesHome.sectionTitle}>Our Recommendation</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={stylesHome.horizontalScroll}>
            {renderCard(
              'Zekreet Fort',
              'Historical Place',
              require('../assest/zekreet_fort.png'),
            )}
            {renderCard(
              'Bin Jelmood House',
              'Historical Place',
              require('../assest/Bin_Jelmood_House.png'),
            )}
            {renderCard(
              'Traditional Foods',
              'Foods',
              require('../assest/Traditiional_Foods.png'),
            )}
          </ScrollView>

          <Text style={stylesHome.sectionTitle}>Nearby Attractions</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={stylesHome.horizontalScroll}>
            {renderCard(
              'Ahmad Bin Ali Stadium',
              'FIFA Stadium',
              require('../assest/Ahmad_Bin_Ali_Stadium.png'),
            )}
            {renderCard(
              'Qatar Islamic Cultural.',
              'Cultural Center',
              require('../assest/Qatar_Islamic_Cultural.png'),
            )}
            {renderCard(
              'Lusail Stadium',
              'FIFA Stadium',
              require('../assest/Lusail_Stadium.png'),
            )}
          </ScrollView>
          <Text style={stylesHome.sectionTitle}>My Playlist</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={stylesHome.horizontalScroll}>
            {renderCard(
              'The Villaggio Mall',
              'Architecture',
              require('../assest/The_Villaggio_Mall.png'),
            )}
            {renderCard(
              'National Museum',
              'Architecture',
              require('../assest/National_Musium.png'),
            )}
            {renderCard(
              'Traditional Qatari Attire',
              'Architecture',
              require('../assest/Traditional_Attire.png'),
            )}
          </ScrollView>
          <Text style={stylesHome.sectionTitle}>History Behind The Items</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={stylesHome.horizontalScroll}>
            {renderCard(
              'Handcrafted Items',
              'All are Qatar Products',
              require('../assest/HBI_1.png'),
            )}
            {renderCard(
              'Arabian Lamps',
              'All are Qatar Products',
              require('../assest/HBI_2.png'),
            )}
            {renderCard(
              'Traditional Qatari Attire',
              'All are Qatar Products',
              require('../assest/HBI_3.png'),
            )}
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={stylesHome.horizontalScroll}>
            {renderCard()}
            {renderCard()}
            {renderCard()}
          </ScrollView>
        </ScrollView>

        <View style={stylesHome.navBar}>
          <TouchableOpacity style={stylesHome.navCont}>
            <Image
              source={require('../assest/feature.png')}
              style={stylesHome.navImage}
            />
            <Text style={stylesHome.navItem1} >Featured</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesHome.navCont}>
            <Image
              source={require('../assest/discover.png')}
              style={stylesHome.navImage}
            />
            <Text style={stylesHome.navItem}>Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesHome.navCont}>
            <Image
              source={require('../assest/map.png')}
              style={stylesHome.navImage}
            />
            <Text style={stylesHome.navItem}>Map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesHome.navCont}>
            <Image
              source={require('../assest/reels.png')}
              style={stylesHome.navImage}
            />
            <Text style={stylesHome.navItem}>Reels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesHome.navCont} onPress={navigation.navigate('MyProfile')}>
            <Image
              source={require('../assest/account.png')}
              style={stylesHome.navImage}
            />
            <Text style={stylesHome.navItem}>Account</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
