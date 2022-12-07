import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import {Size, SizeScale} from '../../assets/size';
import IconImage from 'react-native-vector-icons/Entypo';

const Posts = () => {
  const width = SizeScale().width;
  const height = SizeScale().height;
  const widthApp = Size().width;
  
  return (
    <View
      style={{
        marginTop: widthApp < 739 ? width * 15 : height * 6,
        paddingVertical: 10,
      }}>
      <TouchableOpacity
        style={[styles.flex, {justifyContent: 'space-between'}]}>
        <View style={styles.flex}>
          <Image
            style={{
              width: widthApp < 739 ? width * 70 : width * 20,
              height: widthApp < 739 ? height * 15 : height * 90,
              borderRadius: 100,
            }}
            source={{
              uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/272519340_456856172780572_414985506137340571_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9fRxBK9mdHQAX8OPZdt&_nc_oc=AQn_9YsUgU-UX0dhjk5Vba-glqrTppvPC4rLpDonq3na443c-R6-QI3E5cSQWeUHhlQ&tn=hv4vrEB4iLvlP2Rd&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCKh6wFAbwezflKDWwFBy0HAzxfdY8TmIIgn-6wgs0agg&oe=6386AC03',
            }}
          />
          <Text
            style={{
              color: 'black',
              fontSize: widthApp < 739 ? width * 25 : width * 6,
              fontWeight: '400',
              marginLeft: 10,
            }}>
            Bạn đang nghĩ gì ?
          </Text>
        </View>
        <IconImage
          name="images"
          size={widthApp < 739 ? width * 35: width * 10}
          style={[styles.icon, {color: '#00CC00'}]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#555555',
    fontWeight: '600',
    marginTop: 3,
    marginRight: 10,
  },
});
