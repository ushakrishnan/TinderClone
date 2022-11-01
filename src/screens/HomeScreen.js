import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from '../components/TinderCard';
import users from '../../assets/data/users';

import AnimatedStack from '../components/AnimatedStack';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
  };

  const onSwipeRight = user => {
    console.warn('swipe right: ', user.name);
  };

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={users}
        renderItem={({item}) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <View style={styles.icons}>
        <View style={styles.buttons}>
          <FontAwesome name="undo" size={30} color="#FBD88B" />
        </View>
        <View style={styles.buttons}>
          <Entypo name="cross" size={30} color="#F76C6B" />
        </View>
        <View style={styles.buttons}>
          <FontAwesome name="star" size={30} color="#3AB4CC" />
        </View>
        <View style={styles.buttons}>
          <FontAwesome name="heart" size={30} color="#4FCC94" />
        </View>
        <View style={styles.buttons}>
          <Ionicons name="flash" size={30} color="#A65CD2" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#ededed',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  buttons: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default HomeScreen;
