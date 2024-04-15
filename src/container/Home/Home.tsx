import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Animated,
  Text,
  Easing,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import IconMenu from 'react-native-vector-icons/Entypo';
import IconSearch from 'react-native-vector-icons/AntDesign';
import IconMess from 'react-native-vector-icons/Fontisto';
import {SizeScale} from '../../assets/size';
import Posts from './Posts';
import Story from './Story';
import {Size} from './../../assets/size';
import Contents from './Contents';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors';
const data = [
  {
    id: 1,
    name: 'Nhóm anh em siêu nhân GAO 1',
    image: 'https://cdn.tgdd.vn/Files/2019/01/01/1142002/s8high_800x600.jpg',
  },
  {
    id: 2,
    name: 'Nhóm anh em siêu nhân GAO 2',
    image:
      'https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg',
  },
  {
    id: 3,
    name: 'Nhóm anh em siêu nhân GAO 3',
    image:
      'https://mimosawedding.net/wp-content/uploads/2020/03/hoc-chup-anh-o-dau-ha-noi-3.jpg',
  },
  {
    id: 4,
    name: 'Nhóm anh em siêu nhân GAO 4',
    image:
      'https://sgv.edu.vn/uploads/images/info/nhiep-anh-gia-tieng-anh-la-gi.png',
  },
];
type Props = {
  navigation: any
}
const Home = ({ navigation }: Props) => {
  const width = SizeScale().width;
  const height = SizeScale().height;
  const widthApp = Size().width;
  const [toggleGroud, setToggleGroud] = useState<boolean>();
  const fadeAnim = useRef(new Animated.Value(-100)).current;
  // toggleGroud == true
  //   ? // @ts-ignore
  //     Animated.timing(fadeAnim, {
  //       toValue: 0,
  //       duration: 1500, // the duration of the animation
  //       easing: Easing.linear, // the style of animation
  //       useNativeDriver: false,
  //     }).start()
  //   : // fadeAnim.setValue(0)
  //     // @ts-ignore
  //     // fadeAnim.setValue(-100)
  //     null;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#DDDDDD',
        position: 'relative',
      }}>
      {toggleGroud == true && (
        <Animated.View
          style={[
            {
              marginLeft: fadeAnim,
              // backgroundColor: toggleGroud == true ? 'rgba(0,0,0,0.8)' : '',
            },
          ]}>
          <View
            style={{
              height: widthApp < 739 ? height * 282 : width * 40,
              width: '80%',
              backgroundColor: '#fff',
              position: 'relative',
              padding: widthApp < 739 ? width * 30 : height * 40,
            }}>
            <SafeAreaView>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                  style={{
                    fontSize: widthApp < 739 ? width * 30 : height * 30,
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  Nhóm của bạn
                </Text>
                <View
                  style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#DDDDDD',
                    marginVertical: 5,
                  }}></View>
                {data.map((item: any) => (
                  <TouchableOpacity
                    style={[{marginTop: 20, flexDirection: 'row'}]}>
                    <Image
                      style={{
                        width: widthApp < 739 ? width * 70 : width * 20,
                        height: widthApp < 739 ? height * 15 : height * 90,
                        borderRadius: 5,
                        borderColor: '#BBBBBB',
                        borderWidth: 1,
                      }}
                      source={{
                        uri: `${item.image}`,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: widthApp < 739 ? width * 28 : height * 28,
                        color: 'black',
                        fontWeight: '600',
                        marginLeft: 10,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity
                  onPress={async () => {
                    // @ts-ignore

                    const time = setTimeout(() => {
                      setToggleGroud(false);
                    }, 140);
                    setTimeout(() => {
                      clearTimeout(time);
                    }, 145);
                    Animated.timing(fadeAnim, {
                      toValue: -2450,
                      duration: 200, // the duration of the animation
                      easing: Easing.linear, // the style of animation
                      useNativeDriver: false,
                    }).start();
                  }}
                  style={{position: 'absolute', right: 0, top: 0}}>
                  <IconAntDesign
                    name="close"
                    size={widthApp < 739 ? width * 35 : height * 40}
                    style={[styles.icon, {color: 'black'}]}
                  />
                </TouchableOpacity>
              </ScrollView>
            </SafeAreaView>
          </View>
        </Animated.View>
      )}

      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: '#fff', padding: 5}}>
            <View style={[styles.flex, {justifyContent: 'space-between'}]}>
              <View style={styles.flex}>
                <TouchableOpacity
                  onPress={async () => {
                    Animated.timing(fadeAnim, {
                      toValue: 0,
                      duration: 1000, // the duration of the animation
                      easing: Easing.linear, // the style of animation
                      useNativeDriver: false,
                    }).start();
                    setToggleGroud(!toggleGroud);
                  }}>
                  <IconMenu
                    name="menu"
                    size={widthApp < 739 ? width * 58 : width * 15}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: colors.color_blue,
                    fontWeight: '900',
                    fontSize: widthApp < 739 ? width * 50 : width * 12,
                  }}>
                  facebook
                </Text>
              </View>
              <View style={styles.flex}>
                <TouchableOpacity
                  style={{
                    width: widthApp < 739 ? width * 60 : width * 15,
                    height: widthApp < 739 ? height * 13 : height * 65,
                    backgroundColor: '#C0C0C0',
                    position: 'relative',
                    borderRadius: 100,
                    marginRight: widthApp < 739 ? width * 15 : width * 2,
                  }}>
                  <IconSearch
                    name="search1"
                    size={widthApp < 739 ? width * 40 : width * 10}
                    style={[
                      styles.icon,
                      {
                        color: 'black',
                        zIndex: 100,
                        left: widthApp < 739 ? width * 9 : width * 2.5,
                        position: 'absolute',
                        top: widthApp < 739 ? height * 1 : height * 4,
                      },
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: widthApp < 739 ? width * 60 : width * 15,
                    height: widthApp < 739 ? height * 13 : height * 65,
                    backgroundColor: '#C0C0C0',
                    position: 'relative',
                    borderRadius: 100,
                  }}>
                  <IconMess
                    name="messenger"
                    size={widthApp < 739 ? width * 40 : width * 10}
                    style={[
                      styles.icon,
                      {
                        color: 'black',
                        zIndex: 100,
                        left: widthApp < 739 ? width * 9 : width * 2.5,
                        position: 'absolute',
                        top: widthApp < 739 ? height * 1 : height * 4,
                      },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* up posts */}
            <Posts />
          </View>
          {/* up story */}
          <Story />
          {/* content */}
          <Contents navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {flexDirection: 'row', alignItems: 'center'},
  icon: {
    color: '#555555',
    fontWeight: '600',
    marginTop: 3,
    marginRight: 10,
  },
  iconLeft: {
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
