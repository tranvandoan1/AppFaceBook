import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Size, SizeScale } from '../../assets/size';
import IconPublic from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconDot from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatGrid } from 'react-native-super-grid';
import colors from '../../assets/colors';
import { AppDispatch, RootState } from '../../App/Store';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { getData, uploadLike } from '../../Features/PostSlice';
// @ts-ignore

type Props = {
  navigation: any;
  route?: any
};
const Comments = ({ navigation, route }: Props) => {
  const propParams = route?.params?.dataPost;
  const propParamsPosts = route?.params?.dataPosts;
  console.log(route?.params,'route?.params')
  const id_user = 1;
  const width = SizeScale().width;
  const height = SizeScale().height;
  const widthApp = Size().width;
  const [iconEmotion, setIconEmotion] = useState<any>();
  const [like, setLike] = useState<any>([]);
  const users = [
    { id: 1, name: 'trần văn đoàn 1' },
    { id: 2, name: 'trần văn đoàn 2' },
    { id: 3, name: 'trần văn đoàn 3' },
    { id: 4, name: 'trần văn đoàn 4' },
  ];
  const icons = [
    {
      id: 1,
      name: 'like',
      image:
        'https://banner2.cleanpng.com/20180704/tgy/kisspng-thumb-signal-computer-icons-like-button-clip-art-y-linkage-5b3ca3765cac24.0367282415307006623796.jpg',
    },
    {
      id: 2,
      name: 'laugh',
      image:
        'https://cdn.chanhtuoi.com/uploads/2020/05/icon-facebook-08-2.jpg.webp',
    },
    {
      id: 3,
      name: 'cry',
      image: 'https://cdn.chanhtuoi.com/uploads/2020/05/icon-facebook-27-1.jpg',
    },
    {
      id: 4,
      name: 'angry',
      image:
        'https://banner2.cleanpng.com/20180408/yew/kisspng-emoji-emoticon-computer-icons-sticker-angry-5aca0d77d693d2.7197998315231911598789.jpg',
    },
  ];

  // const useAppSelector=us
  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()
  const dispatch = useDispatch<AppDispatch>();
  // const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  // const dataPostsFake = useAppSelect((data: any) => data.posts.value);
  // console.log(dataPostsFake, 'dataPostsFake')
  // useEffect(() => {
  //   // @ts-ignore
  //   dispatch(getData())
  // })
  const onclickLike = async (item: any) => {
    if (item.likes.length <= 0) {
      item.likes = [{ id_user: id_user, emotion: 1 }];
    } else {
      const newLike = item.likes?.filter(
        (itemLike: any) => String(itemLike.id_user) !== String(id_user),
      );
      const coincide = item.likes?.find(
        (itemLike: any) => itemLike.id_user == id_user,
      );
      if (coincide == undefined) {
        item.likes = [
          ...item.likes,
          { id_user: id_user, emotion: 1 },
        ];
      } else {
        item.likes = [...newLike];
      }
    }
    for (let i = 0; i < propParamsPosts.length; i++) {
      if (propParamsPosts[i].id == item.id) {
        propParamsPosts[i] = item
      }

    }
    console.log(propParamsPosts,'propParamsPosts')
    // await dispatch(uploadLike(propParamsPosts))
    // if (propParams?.emotion == undefined) {
    //   for (let i = 0; i < dataPostsFake.length; i++) {
    //     if (dataPostsFake[i].id == propParams?.id) {
    //       if (dataPostsFake[i].likes.length <= 0) {
    //         dataPostsFake[i].likes = [{ id_user: id_user, emotion: 1 }];
    //       } else {
    //         const newLike = dataPostsFake[i].likes?.filter(
    //           (itemLike: any) => String(itemLike.id_user) !== String(id_user),
    //         );
    //         const coincide = dataPostsFake[i].likes?.find(
    //           (itemLike: any) => itemLike.id_user == id_user,
    //         );
    //         if (coincide == undefined) {
    //           dataPostsFake[i].likes = [
    //             ...dataPostsFake[i].likes,
    //             { id_user: id_user, emotion: 1 },
    //           ];
    //         } else {
    //           dataPostsFake[i].likes = [...newLike];
    //         }
    //       }
    //     }
    //   }
    //   await dispatch(uploadLike(dataPostsFake))
    //   // setDataFake([...dataFake]);
    //   setIconEmotion(undefined);
    // } else {
    //   for (let i = 0; i < dataPostsFake.length; i++) {
    //     if (dataPostsFake[i].id == propParams?.data?.id) {
    //       const newLike = dataPostsFake[i].likes?.filter(
    //         (itemLike: any) => String(itemLike.id_user) !== String(id_user),
    //       );
    //       const coincide = dataPostsFake[i].likes?.find(
    //         (itemLike: any) => itemLike.id_user == id_user,
    //       );
    //       if (coincide !== undefined || dataPostsFake[i].likes?.length <= 0) {
    //         dataPostsFake[i].likes = [
    //           ...newLike,
    //           { id_user: id_user, emotion: propParams?.emotion },
    //         ];
    //       } else {
    //         dataPostsFake[i].likes = [...newLike];
    //       }
    //     }
    //   }
    //   // setDataFake([...dataFake]);
    //   await dispatch(uploadLike(dataPostsFake))
    //   setIconEmotion(undefined);
    // }
  };

  const componentRenderLike = (item: any) => {
    const checkLike = propParams?.likes?.find(
      (itemLike: any) => itemLike?.id_user == id_user,
    );
    return (
      <TouchableOpacity
        onPress={() => onclickLike(item)}
        onLongPress={() => setIconEmotion(propParams?.id)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}>
        {checkLike?.emotion == 2 ? (
          <Image
            style={{
              width: width * 45,
              height: width * 45,
              marginTop: 3,
            }}
            source={{
              uri: 'https://cdn.chanhtuoi.com/uploads/2020/05/icon-facebook-08-2.jpg.webp',
            }}
          />
        ) : checkLike?.emotion == 3 ? (
          <Image
            style={{
              width: width * 45,
              height: width * 45,
              marginTop: 3,
            }}
            source={{
              uri: 'https://cdn.chanhtuoi.com/uploads/2020/05/icon-facebook-27-1.jpg',
            }}
          />
        ) : checkLike?.emotion == 4 ? (
          <Image
            style={{
              width: width * 45,
              height: width * 45,
              marginTop: 3,
            }}
            source={{
              uri: 'https://banner2.cleanpng.com/20180408/yew/kisspng-emoji-emoticon-computer-icons-sticker-angry-5aca0d77d693d2.7197998315231911598789.jpg',
            }}
          />
        ) : checkLike?.emotion == 1 ? (
          <Image
            style={{
              width: width * 45,
              height: width * 45,
              marginTop: 3,
            }}
            source={{
              uri: 'https://banner2.cleanpng.com/20180704/tgy/kisspng-thumb-signal-computer-icons-like-button-clip-art-y-linkage-5b3ca3765cac24.0367282415307006623796.jpg',
            }}
          />
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconAntDesign
              name={'like2'}
              size={widthApp < 739 ? width * 35 : height * 45}
              style={[styles.icon, { color: colors.color_black }]}
            />
            <Text
              style={{
                color: colors.color_black,
                marginTop: 4,
                marginLeft: -5,
                fontSize: widthApp < 739 ? width * 25 : height * 30,
                fontWeight: '400',
              }}>
              Thích
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderShowLike = (item: any) => {
    const checkLike = propParams?.likes?.find(
      (itemLike: any) => itemLike?.id_user == id_user,
    );
    return (
      <Text>
        {checkLike == undefined
          ? propParams?.likes?.length
          : +propParams?.likes?.length - +1 == 0
            ? 'Bạn'
            : ` Bạn và ${+propParams?.likes?.length - +1} người khác`}
      </Text>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff"
      }}>
      {/* {dataFake?.map((item: any) => {
        return ( */}
      <View
        style={{
          marginBottom: 10,
          backgroundColor: '#fff',
          paddingHorizontal: widthApp < 739 ? width * 15 : height * 25,
          paddingVertical: widthApp < 739 ? width * 15 : height * 10,
        }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.flex}>
            <TouchableOpacity onPress={() => navigation?.navigate('Home')}>
              <IconAntDesign
                name="left"
                size={widthApp < 739 ? width * 35 : height * 40}
                style={[styles.icon, { color: 'black' }]}
              />
            </TouchableOpacity>
            <View style={styles.flex}>
              <Image
                style={{
                  width: widthApp < 739 ? width * 70 : height * 90,
                  height: widthApp < 739 ? height * 15 : height * 90,
                  borderRadius: 100,
                  marginRight: widthApp < 739 ? width * 10 : height * 15,
                }}
                source={{
                  uri: propParams?.image[0],
                }}
              />
              <View>
                {users.map((user: any) => {
                  if (user.id == propParams?.user_id) {
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
          </View>
          <TouchableOpacity>
            <IconDot
              name="dots-three-horizontal"
              size={widthApp < 739 ? width * 30 : height * 40}
              style={[styles.icon, { color: 'black' }]}
            />
          </TouchableOpacity>

        </View>
        <Text
          style={{
            marginVertical: 10,
            fontSize: widthApp < 739 ? width * 26 : height * 30,
            color: 'black',
          }}>
          Chúc mừng năm mới
        </Text>

        <TouchableOpacity style={{ width: '100%' }}>
          <FlatGrid
            itemDimension={widthApp < 739 ? 90 : 160}
            data={propParams?.image}
            showsVerticalScrollIndicator={false}
            // @ts-ignore
            renderItem={(itemImage: any) => {
              if (propParams?.image.length >= 4) {
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
                      style={{ width: '100%' }}>
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
                          + {+propParams?.image.length - +(widthApp < 739 ? 4 : 6)}
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

        {propParams?.likes?.length > 0 && (
          <View style={[styles.flex, { marginBottom: width * 5 }]}>
            {/* hiện nhưng like của bài viết */}
            {propParams?.likes?.map((itemLike: any, index: any) =>
              icons.map((itemIcon: any) => {
                if (itemLike?.emotion == itemIcon.id) {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          width: width * 45,
                          height: width * 45,
                          marginTop: 3,
                          marginLeft: index > 0 ? 5 : 2,
                        }}
                        source={{
                          uri: itemIcon.image,
                        }}
                      />
                    </TouchableOpacity>
                  );
                }
              }),
            )}

            <Text
              style={{
                fontSize: widthApp < 739 ? width * 25 : height * 25,
                color: 'black',
                fontWeight: '400',
                marginLeft: widthApp < 739 ? width * 5 : width * 5,
              }}>
              {renderShowLike(propParams)}
            </Text>
          </View>
        )}

        <View
          style={{
            borderColor: '#DDDDDD',
            borderTopWidth: 1,
            position: 'relative',
          }}>
          {/* hiện các biểu cảm để chọn */}
          {propParams?.id == iconEmotion ? (
            <View style={[styles.emotion, { bottom: width * 50 }]}>
              {icons?.map((itemIcon: any) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      onclickLike({ data: propParams, emotion: itemIcon.id })
                    }>
                    <Image
                      style={{ width: width * 55, height: width * 55 }}
                      source={{
                        uri: itemIcon.image,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}

          <View
            style={[
              styles.flex,
              {
                marginVertical: widthApp < 739 ? width * 5 : height * 5,
                flexGrow: 1,
              },
            ]}>
            {propParams?.likes?.length <= 0 ? (
              <TouchableOpacity
                onLongPress={() => setIconEmotion(propParams?.id)} //hove khi chưa  like
                onPress={() => onclickLike(propParams)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <IconAntDesign
                  name={'like2'}
                  size={widthApp < 739 ? width * 35 : height * 45}
                  style={[styles.icon, { color: colors.color_black }]}
                />
                <Text
                  style={{
                    color: colors.color_black,
                    marginTop: 4,
                    marginLeft: -5,
                    fontSize: widthApp < 739 ? width * 25 : height * 30,
                    fontWeight: '400',
                  }}>
                  Thích
                </Text>
              </TouchableOpacity>
            ) : (
              componentRenderLike(propParams)
            )}
            {/* comment */}
            <TouchableOpacity
              onPress={() =>
                navigation?.navigate('Comment', {
                  data: propParams,
                })
              }
              style={[styles.flex, { flex: 1, justifyContent: 'center' }]}>
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
              style={[styles.flex, { flex: 1, justifyContent: 'flex-end' }]}>
              <IconMaterialCommunityIcons
                name="share-outline"
                size={widthApp < 739 ? width * 35 : height * 45}
                style={[styles.icon, { color: 'black' }]}
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
      {/* );
      })} */}
    </View>
  );
};

export default Comments;

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
  emotion: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    position: 'absolute',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'space-around',
  },
});
