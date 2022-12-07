import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {SizeScale} from '../../assets/size';
import IconPlus from 'react-native-vector-icons/AntDesign';
import {Size} from './../../assets/size';

const Story = () => {
  const width = SizeScale().width;
  const height = SizeScale().height;
  const widthApp = Size().width;
  const DATA = [
    {
      id: '01',
      name: 'Tạo tin',
      image:
        'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/272519340_456856172780572_414985506137340571_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9fRxBK9mdHQAX8OPZdt&_nc_oc=AQn_9YsUgU-UX0dhjk5Vba-glqrTppvPC4rLpDonq3na443c-R6-QI3E5cSQWeUHhlQ&tn=hv4vrEB4iLvlP2Rd&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCKh6wFAbwezflKDWwFBy0HAzxfdY8TmIIgn-6wgs0agg&oe=6386AC03',
    },
    {
      id: '1',
      name: 'Trần Văn Đoàn',
      image:
        'https://vcdn1-dulich.vnecdn.net/2022/05/27/du-lich-Viet-Nam-3-1653637304.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=JTkFADdHoPj9uPujAqAv0w',
    },
    {
      id: '2',
      name: 'Trần Nguyễn Văn A',
      image:
        'https://image.thanhnien.vn/w1024/Uploaded/2022/ifyiy/2022_01_04/a5ee06311886d2d88b97-981.jpg',
    },
    {
      id: '3',
      name: 'Nguyễn Lê Hoài Thư Anh',
      image:
        'https://info-imgs.vgcloud.vn/2020/07/17/15/bo-bang-dai-hoc-nhiep-anh-gia-ha-thanh-so-huu-thu-nhap-9-so-6.jpg',
    },
    {
      id: '4',
      name: 'Third Item3',
      image:
        'https://vcdn1-dulich.vnecdn.net/2022/05/27/du-lich-Viet-Nam-3-1653637304.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=JTkFADdHoPj9uPujAqAv0w',
    },

    {
      id: '5',
      name: 'Third Item4',
      image:
        'https://vcdn1-dulich.vnecdn.net/2022/05/27/du-lich-Viet-Nam-3-1653637304.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=JTkFADdHoPj9uPujAqAv0w',
    },
    {
      id: '6',
      name: 'Third Item5',
      image:
        'https://vcdn1-dulich.vnecdn.net/2022/05/27/du-lich-Viet-Nam-3-1653637304.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=JTkFADdHoPj9uPujAqAv0w',
    },
  ];

  const renderItem = ({item}: any) => {
    if (item.id == '01') {
      return (
        <TouchableOpacity
          style={{
            width: widthApp < 739 ? width * 200 : width * 50,
            height: widthApp < 739 ? height * 80 : height * 450,
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
            marginRight: widthApp < 739 ? width * 10 : width * 2,
            marginLeft: widthApp < 739 ? width * 0 : width * 2,
          }}>
          <ImageBackground
            source={{
              uri: `${item.image}`,
            }}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}>
            <View
              style={{
                backgroundColor: '#EEEEEE',
                position: 'absolute',
                bottom: 0,
                height: widthApp < 739 ? height * 25 : height * 150,
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontWeight: '700',
                  fontSize: widthApp < 739 ? width * 25 : width * 8,
                  marginBottom: widthApp < 739 ? height * 2 : height * 5,
                }}>
                {item.name}
              </Text>
            </View>
            <IconPlus
              name="pluscircle"
              size={widthApp < 739 ? width * 70 : width * 20}
              style={[
                styles.icon,
                {
                  color: '#0099FF',
                  position: 'absolute',
                  bottom: widthApp < 739 ? height * 17 : height * 100,
                  backgroundColor: '#fff',
                  borderRadius: 100,
                  left: widthApp < 739 ? width * 65 : width * 16,
                },
              ]}
            />
          </ImageBackground>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            width: widthApp < 739 ? width * 200 : width * 50,
            height: widthApp < 739 ? height * 80 : height * 450,
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
            marginRight: 5,
          }}>
          <ImageBackground
            source={{
              uri: `${item.image}`,
            }}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}>
            <Image
              style={{
                width: widthApp < 739 ? width * 80 : width * 15,
                height: widthApp < 739 ? height * 17 : height * 70,
                borderRadius: 100,
                position: 'absolute',
                top: 10,
                left: 10,
                borderWidth: 5,
                borderColor: '#0099FF',
              }}
              source={{
                uri: `${item.image}`,
              }}
            />
            <View
              style={{
                padding: 10,
                width: '100%',
                position: 'absolute',
                bottom: widthApp < 739 ? width * 1 : width * 10,
              }}>
              <Text
                numberOfLines={2}
                style={{
                  color: '#fff',
                  fontSize: widthApp < 739 ? width * 23 : width * 6,
                  zIndex: 100,
                  left: widthApp < 739 ? width * 2 : width * 2,
                  fontWeight: '500',
                }}>
                {item.name}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginTop: widthApp < 739 ? height * 3 : height * 15,
        paddingVertical: widthApp < 739 ? height * 4 : height * 20,
        paddingHorizontal: widthApp < 739 ? height * 2 : height * 10,
      }}>
      <FlatList
        data={DATA}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  icon: {
    color: '#555555',
    fontWeight: '600',
    marginTop: 3,
    marginRight: 10,
  },
});
