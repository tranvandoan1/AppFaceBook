import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {Size, SizeScale} from '../../assets/size';
import IconPublic from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconDot from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatGrid} from 'react-native-super-grid';
import colors from '../../assets/colors';
// @ts-ignore
const data = [
  {
    id: '01',
    user_id: '1',
    title: 'Tạo tin',
    image: [
      'https://cdn.tgdd.vn/Files/2019/01/01/1142002/s8high_800x600.jpg',
      'https://bigdata-vn.com/wp-content/uploads/2021/10/Hinh-nen-phong-canh-dep.jpg',
      'https://didongviet.vn/dchannel/wp-content/uploads/2022/01/cute-didongviet.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKXPuejYonuMBi3JfkwpAzd2gg-OvndZth2v62ptvhyd58VTvOdlO6MO0wNEp4RTjVEc&usqp=CAU',
      'https://toanthaydinh.com/wp-content/uploads/2020/04/phong-canh-dep-6.jpg',
      'https://toanthaydinh.com/wp-content/uploads/2020/04/phong-canh-dep-6.jpg',
      'https://bigdata-vn.com/wp-content/uploads/2021/10/Hinh-nen-phong-canh-dep.jpg',
    ],
    likes: ['1', '3'],
  },
  {
    id: '1',
    user_id: '2',
    title: 'Trần Văn Đoàn',
    image: [
      'https://vcdn1-dulich.vnecdn.net/2022/05/27/du-lich-Viet-Nam-3-1653637304.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=JTkFADdHoPj9uPujAqAv0w',
      'https://toanthaydinh.com/wp-content/uploads/2020/04/phong-canh-dep-6.jpg',
    ],
    likes: ['2', '4', '5'],
  },
  {
    id: '2',
    user_id: '3',
    title: 'Trần Nguyễn Văn A',
    image: [
      'https://image.thanhnien.vn/w1024/Uploaded/2022/ifyiy/2022_01_04/a5ee06311886d2d88b97-981.jpg',
      ,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKXPuejYonuMBi3JfkwpAzd2gg-OvndZth2v62ptvhyd58VTvOdlO6MO0wNEp4RTjVEc&usqp=CAU',
    ],
    likes: ['1', '3'],
  },
  {
    id: '3',
    user_id: '4',
    title: 'Nguyễn Lê Hoài Thư Anh',
    image: [
      'https://info-imgs.vgcloud.vn/2020/07/17/15/bo-bang-dai-hoc-nhiep-anh-gia-ha-thanh-so-huu-thu-nhap-9-so-6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKXPuejYonuMBi3JfkwpAzd2gg-OvndZth2v62ptvhyd58VTvOdlO6MO0wNEp4RTjVEc&usqp=CAU',
    ],
    likes: [],
  },
  {
    id: '4',
    user_id: '3',
    title: 'Third Item3',
    image: [
      'https://info-imgs.vgcloud.vn/2020/07/17/15/bo-bang-dai-hoc-nhiep-anh-gia-ha-thanh-so-huu-thu-nhap-9-so-6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKXPuejYonuMBi3JfkwpAzd2gg-OvndZth2v62ptvhyd58VTvOdlO6MO0wNEp4RTjVEc&usqp=CAU',
    ],
    likes: [],
  },

  {
    id: '5',
    user_id: '4',
    title: 'Third Item4',
    image: [
      'https://info-imgs.vgcloud.vn/2020/07/17/15/bo-bang-dai-hoc-nhiep-anh-gia-ha-thanh-so-huu-thu-nhap-9-so-6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKXPuejYonuMBi3JfkwpAzd2gg-OvndZth2v62ptvhyd58VTvOdlO6MO0wNEp4RTjVEc&usqp=CAU',
    ],
    likes: [],
  },
  {
    id: '6',
    user_id: '2',
    title: 'Third Item5',
    image: [
      'https://info-imgs.vgcloud.vn/2020/07/17/15/bo-bang-dai-hoc-nhiep-anh-gia-ha-thanh-so-huu-thu-nhap-9-so-6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKXPuejYonuMBi3JfkwpAzd2gg-OvndZth2v62ptvhyd58VTvOdlO6MO0wNEp4RTjVEc&usqp=CAU',
    ],
    likes: [],
  },
];
const Contents = () => {
  const id_user = 1;
  const width = SizeScale().width;
  const height = SizeScale().height;
  const widthApp = Size().width;
  const [like, setLike] = useState<any>([]);
  const [dataFake, setDataFake] = useState<any>(data);
  const users = [
    {id: 1, name: 'trần văn đoàn 1'},
    {id: 2, name: 'trần văn đoàn 2'},
    {id: 3, name: 'trần văn đoàn 3'},
    {id: 4, name: 'trần văn đoàn 4'},
  ];

  const onclickLike = (item: any) => {
    // const newdata = dataFake == undefined ? data : dataFake;
    for (let i = 0; i < dataFake.length; i++) {
      if (dataFake[i].id == item.id) {
        if (dataFake[i].likes.length <= 0) {
          dataFake[i].likes = [id_user];
        } else {
          const newLike = dataFake[i].likes?.filter(
            (itemLike: any) => String(itemLike) !== String(id_user),
          );
          const coincide = dataFake[i].likes?.find(
            (itemLike: any) => itemLike == id_user,
          );
          if (coincide == undefined) {
            dataFake[i].likes = [...dataFake[i].likes, id_user];
          } else {
            dataFake[i].likes = [...newLike];
          }
        }
      }
    }
    setDataFake([...dataFake]);
  };

  return (
    <View
      style={{
        marginTop: widthApp < 739 ? width * 15 : height * 6,
      }}>
      {dataFake?.map((item: any) => {
        return (
          <View
            style={{
              marginBottom: 10,
              backgroundColor: '#fff',
              paddingHorizontal: widthApp < 739 ? width * 15 : height * 25,
              paddingVertical: widthApp < 739 ? width * 15 : height * 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.flex}>
                <Image
                  style={{
                    width: widthApp < 739 ? width * 70 : height * 90,
                    height: widthApp < 739 ? height * 15 : height * 90,
                    borderRadius: 100,
                    marginRight: widthApp < 739 ? width * 10 : height * 15,
                  }}
                  source={{
                    uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/272519340_456856172780572_414985506137340571_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9fRxBK9mdHQAX8OPZdt&_nc_oc=AQn_9YsUgU-UX0dhjk5Vba-glqrTppvPC4rLpDonq3na443c-R6-QI3E5cSQWeUHhlQ&tn=hv4vrEB4iLvlP2Rd&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCKh6wFAbwezflKDWwFBy0HAzxfdY8TmIIgn-6wgs0agg&oe=6386AC03',
                  }}
                />
                <View>
                  {users.map((user: any) => {
                    if (user.id == item.user_id) {
                      return (
                        <Text
                          style={{
                            fontSize: widthApp < 739 ? width * 27 : height * 35,
                            fontWeight: '500',
                            color: 'black',
                          }}>
                          {user.name}
                        </Text>
                      );
                    }
                  })}
                  <View style={styles.flex}>
                    <Text
                      style={{
                        fontSize: widthApp < 739 ? width * 21 : height * 30,
                      }}>
                      23 giờ *{' '}
                    </Text>
                    <IconPublic
                      name="public"
                      size={widthApp < 739 ? width * 30 : height * 35}
                      style={[styles.icon]}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.flex}>
                <TouchableOpacity>
                  <IconDot
                    name="dots-three-horizontal"
                    size={widthApp < 739 ? width * 30 : height * 40}
                    style={[styles.icon, {color: 'black'}]}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <IconAntDesign
                    name="close"
                    size={widthApp < 739 ? width * 35 : height * 40}
                    style={[styles.icon, {color: 'black'}]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                marginVertical: 10,
                fontSize: widthApp < 739 ? width * 26 : height * 30,
                color: 'black',
              }}>
              Chúc mừng năm mới
            </Text>

            <TouchableOpacity style={{width: '100%'}}>
              <FlatGrid
                itemDimension={widthApp < 739 ? 90 : 160}
                data={item.image}
                showsVerticalScrollIndicator={false}
                // @ts-ignore
                renderItem={(itemImage: any) => {
                  if (item.image.length >= 4) {
                    if (
                      widthApp < 739 ? itemImage.index < 4 : itemImage.index < 6
                    ) {
                      return (
                        <View
                          style={{
                            width: widthApp < 739 ? width * 225 : height * 330,
                            height: widthApp < 739 ? height * 40 : width * 70,
                            borderRadius: 3,
                            position: 'relative',
                            overflow: 'hidden',
                            marginLeft:
                              widthApp < 739 ? width * -10 : height * -10,
                          }}>
                          <Image
                            style={{
                              width: '100%',
                              height: '100%',
                              borderColor: colors.color_blue,
                              resizeMode: 'cover',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                            }}
                            source={{
                              uri: `${itemImage.item}`,
                            }}
                          />
                        </View>
                      );
                    } else if (
                      widthApp < 739
                        ? itemImage.index == 4
                        : itemImage.index == 6
                    ) {
                      return (
                        <ImageBackground
                          source={{
                            uri: `${itemImage.item}`,
                          }}
                          style={{width: '100%'}}>
                          <View
                            style={{
                              width:
                                widthApp < 739 ? width * 225 : height * 330,
                              height: widthApp < 739 ? height * 40 : width * 70,
                              backgroundColor: 'rgba(0,0,0,.7)',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginLeft:
                                widthApp < 739 ? width * -5 : height * -5,
                            }}>
                            <Text
                              style={{
                                textAlign: 'center',
                                fontSize:
                                  widthApp < 739 ? width * 40 : height * 60,
                                fontWeight: '600',
                                color: '#fff',
                              }}>
                              + {+item.image.length - +(widthApp < 739 ? 4 : 6)}
                            </Text>
                          </View>
                        </ImageBackground>
                      );
                    }
                  } else {
                    return (
                      <View
                        style={{
                          width: widthApp < 739 ? width * 225 : height * 330,
                          height: widthApp < 739 ? height * 40 : width * 70,
                          borderRadius: 3,
                          marginRight: 5,
                          position: 'relative',
                          overflow: 'hidden',
                          marginLeft:
                            widthApp < 739 ? width * -10 : height * -10,
                        }}>
                        <Image
                          style={{
                            width: '100%',
                            height: '100%',
                            borderColor: colors.color_blue,
                            resizeMode: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                          }}
                          source={{
                            uri: `${itemImage.item}`,
                          }}
                        />
                      </View>
                    );
                  }
                }}
              />
            </TouchableOpacity>

            {item?.likes?.find((itemLike: any) => itemLike == id_user) !==
            undefined ? (
              <TouchableOpacity style={styles.flex}>
                <IconAntDesign
                  name={'like1'}
                  size={widthApp < 739 ? width * 35 : height * 45}
                  style={[
                    styles.icon,
                    {
                      color: colors.color_blue,
                      marginBottom: widthApp < 739 ? width * 10 : height * 10,
                    },
                  ]}
                />
                <Text
                  style={{
                    fontSize: widthApp < 739 ? width * 25 : height * 25,
                    color: 'black',
                    fontWeight: '400',
                    marginLeft: widthApp < 739 ? width * -5 : height * -5,
                  }}>
                  Bạn
                  {item?.likes.length > 1
                    ? ` và ${+item?.likes?.length - +1} người khác`
                    : null}
                </Text>
              </TouchableOpacity>
            ) : (
              item?.likes?.length > 0 && (
                <TouchableOpacity style={styles.flex}>
                  <IconAntDesign
                    name={'like1'}
                    size={widthApp < 739 ? width * 35 : height * 45}
                    style={[
                      styles.icon,
                      {
                        color: colors.color_blue,
                        marginBottom: widthApp < 739 ? width * 10 : height * 10,
                      },
                    ]}
                  />

                  <Text
                    style={{
                      fontSize: widthApp < 739 ? width * 25 : height * 25,
                      color: 'black',
                      fontWeight: '400',
                      marginLeft: widthApp < 739 ? width * -5 : height * -5,
                    }}>
                    {item?.likes?.length}
                  </Text>
                </TouchableOpacity>
              )
            )}

            <View style={{borderColor: '#DDDDDD', borderTopWidth: 1}}>
              <View
                style={[
                  styles.flex,
                  {
                    justifyContent: 'space-between',
                    marginVertical: widthApp < 739 ? width * 5 : height * 5,
                  },
                ]}>
                {item?.likes?.find((itemLike: any) => itemLike == id_user) !==
                undefined ? (
                  <TouchableOpacity
                    onPress={() => onclickLike(item)}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <IconAntDesign
                      name={'like1'}
                      size={widthApp < 739 ? width * 35 : height * 45}
                      style={[styles.icon, {color: colors.color_blue}]}
                    />
                    <Text
                      style={{
                        color: colors.color_blue,
                        marginTop: 4,
                        marginLeft: -5,
                        fontSize: widthApp < 739 ? width * 25 : height * 30,
                        fontWeight: '400',
                      }}>
                      Thích
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => onclickLike(item)}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <IconAntDesign
                      name={'like2'}
                      size={widthApp < 739 ? width * 35 : height * 45}
                      style={[styles.icon, {color: 'black'}]}
                    />
                    <Text
                      style={{
                        color: 'black',
                        marginTop: 4,
                        marginLeft: -5,
                        fontSize: widthApp < 739 ? width * 25 : height * 30,
                        fontWeight: '400',
                      }}>
                      Thích
                    </Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <IconMaterialCommunityIcons
                    name="comment-outline"
                    size={widthApp < 739 ? width * 35 : height * 45}
                    style={[
                      styles.icon,
                      {
                        color: 'black',
                        marginTop: widthApp < 739 ? width * 10 : height * 15,
                      },
                    ]}
                  />
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 4,
                      marginLeft: -5,
                      fontSize: widthApp < 739 ? width * 25 : height * 30,

                      fontWeight: '400',
                    }}>
                    Bình luận
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <IconMaterialCommunityIcons
                    name="share-outline"
                    size={widthApp < 739 ? width * 35 : height * 45}
                    style={[styles.icon, {color: 'black'}]}
                  />
                  <Text
                    style={{
                      color: 'black',
                      marginTop: widthApp < 739 ? width * 1 : height * 1,
                      marginLeft: -5,
                      fontSize: widthApp < 739 ? width * 25 : height * 30,

                      fontWeight: '400',
                    }}>
                    Chia sẻ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Contents;

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
