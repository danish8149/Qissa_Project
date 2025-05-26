// import React from 'react';
// import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const SubscriptionScreen = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Pick a Subscription</Text>

//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
//         {/* Example Card 1 */}
//         <View style={styles.card}>
//           <Text style={styles.tag}>MOST POPULAR</Text>
//           <Text style={styles.plan}>Traveler Plan</Text>
//           <Text style={styles.price}>$3.99 <Text style={styles.discount}>30% OFF</Text></Text>
//           <Text style={styles.note}>/month - $35.99 Paid Annually</Text>
//           <Text style={styles.includesTitle}>WHAT’S INCLUDED</Text>
//           <Text style={styles.listItem}>✔ 23,000+ stories across GCC and beyond</Text>
//           <Text style={styles.listItem}>✔ Get notified when near a story</Text>
//           <Text style={styles.listItem}>✔ Celebrity storytelling</Text>
//           <Text style={styles.listItem}>✔ Offline listening</Text>
//         </View>

//         {/* You can add more View cards here */}
//       </ScrollView>

//       <View style={styles.buttonRow}>
//         <TouchableOpacity style={styles.skipButton}>
//           <Text style={styles.skipText}>Skip</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.nextButton}>
//           <Text style={styles.nextText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#E6F6FB',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   cardContainer: {
//     paddingVertical: 10,
//   },
//   card: {
//     width: 280,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     marginRight: 16,
//     borderWidth: 1,
//     borderColor: '#00AEEF',
//   },
//   tag: {
//     backgroundColor: '#FFA500',
//     color: '#fff',
//     alignSelf: 'flex-start',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 5,
//     marginBottom: 8,
//     fontWeight: 'bold',
//   },
//   plan: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   price: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   discount: {
//     fontSize: 14,
//     backgroundColor: '#E0F7FA',
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 4,
//     color: '#00796B',
//   },
//   note: {
//     fontSize: 14,
//     color: '#333',
//     marginBottom: 10,
//   },
//   includesTitle: {
//     fontWeight: 'bold',
//     marginTop: 10,
//     marginBottom: 6,
//   },
//   listItem: {
//     fontSize: 14,
//     marginBottom: 4,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 24,
//   },
//   skipButton: {
//     flex: 1,
//     marginRight: 8,
//     paddingVertical: 12,
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     alignItems: 'center',
//   },
//   nextButton: {
//     flex: 1,
//     marginLeft: 8,
//     paddingVertical: 12,
//     backgroundColor: '#00AEEF',
//     borderRadius: 25,
//     alignItems: 'center',
//   },
//   skipText: {
//     color: '#000',
//   },
//   nextText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default SubscriptionScreen;

///////////////////////////////////////

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const SubscriptionScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Pick a Subscription</Text>

      {/* Free stories info */}
      <View style={styles.freeStoriesBox}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/50/000000/audio-wave.png',
          }}
          style={styles.icon}
        />
        <Text style={styles.freeStoriesText}>
          You have 5 free audio stories.
        </Text>
        <Text style={styles.arrow}>›</Text>
      </View>

      {/* Subscription plans */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardScroll}>
        <View style={styles.planCard}>
          <Text style={styles.tag}>MOST POPULAR</Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/000000/crown.png',
            }}
            style={styles.planIcon}
          />
          <Text style={styles.planTitle}>Traveler Plan</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>$3.99</Text>
            <Text style={styles.discount}>30% OFF</Text>
          </View>
          <Text style={styles.annualNote}>/month – $35.99 Paid Annually.</Text>

          <Text style={styles.includesHeader}>WHAT’S INCLUDED</Text>
          <View style={styles.benefit}>
            <Text style={styles.check}>✔</Text>
            <Text style={styles.benefitText}>
              23,000+ stories across the GCC and beyond.
            </Text>
          </View>
          <View style={styles.benefit}>
            <Text style={styles.check}>✔</Text>
            <Text style={styles.benefitText}>
              Get notified when you’re nearby a story you haven’t listened to
              before.
            </Text>
          </View>
          <View style={styles.benefit}>
            <Text style={styles.check}>✔</Text>
            <Text style={styles.benefitText}>
              Professional storytelling by celebrities like Kevin Costner, Phil
              Jackson, and John Lithgow.
            </Text>
          </View>
          <View style={styles.benefit}>
            <Text style={styles.check}>✔</Text>
            <Text style={styles.benefitText}>
              Download stories and playlists for offline listening.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F6FB',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  backArrow: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 16,
    alignSelf: 'center',
  },
  freeStoriesBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  freeStoriesText: {
    flex: 1,
    fontSize: 16,
  },
  arrow: {
    fontSize: 20,
    color: '#888',
  },
  cardScroll: {
    marginVertical: 10,
  },
  planCard: {
    backgroundColor: '#fff',
    borderColor: '#00AEEF',
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    width: 320,
    marginRight: 16,
  },
  tag: {
    backgroundColor: '#FFA500',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 12,
  },
  planIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  discount: {
    backgroundColor: '#D9F4FF',
    color: '#0077A6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 'bold',
  },
  annualNote: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  includesHeader: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 14,
  },
  benefit: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  check: {
    fontSize: 16,
    marginRight: 8,
    color: '#00AEEF',
    lineHeight: 20,
  },
  benefitText: {
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  skipButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  nextButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#00AEEF',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },
  skipText: {
    color: '#000',
    fontWeight: '500',
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SubscriptionScreen;
