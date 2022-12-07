import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import IconMenu from 'react-native-vector-icons/Entypo';
import IconSearch from 'react-native-vector-icons/FontAwesome';
import {Size, SizeScale} from '../../assets/size';
import colors from '../../assets/colors';
type UserRole = {
  id: string | number;
  name: string;
  photo: string;
  userIdWaiting: users[];
  user_id: number[];
};
type users = {
  id: string | number;
  user_id: string | number;
  time: string;
};
const Friend = () => {
  const width = SizeScale().width;
  const height = SizeScale().height;
  const widthApp = Size().width;
  const renderWidth = (size: number[]) =>
  widthApp < 739 ? width * size[0] : height * size[1];
  const [userRole, setUserRole] = useState<UserRole>({
    id: 1,
    name: 'Trần Văn Đoàn',
    // time: `${i + 1} năm`,
    photo:
      'https://i.ex-cdn.com/giadinhmoi.vn/files/content/2022/10/20/chup-anh-dep-07-1637.jpg',
    userIdWaiting: [
      {id: 1, user_id: 1, time: '1 năm'},
      {id: 2, user_id: 2, time: '2 năm'},
      {id: 3, user_id: 3, time: '3 năm'},
      {id: 4, user_id: 4, time: '4 năm'},
    ],
    user_id: [3, 4],
  });

  1;
  const users = [
    {
      id: 1,
      name: 'Trần Văn Đoàn1',
      user_id: [1, 3, 5],
      photo:
        'https://reviewchuan.vn/wp-content/uploads/2022/03/cach-tao-dang-chup-anh-dep-cho-nu.jpg',
    },
    {
      id: 2,
      name: 'Nguyễn Thị Dung',
      user_id: [2],
      photo:
        'https://i.ex-cdn.com/giadinhmoi.vn/files/content/2022/10/20/chup-anh-dep-07-1637.jpg',
    },
    {
      id: 3,
      name: 'Đào Văn Quang',
      user_id: [1, 2, 3, 4, 5],
      photo:
        'https://cdn.voh.com.vn/voh/Image/2021/08/19/cach-tao-dang-chup-anh-dep-khi-mac-vay-voh-69.jpg',
    },
    {
      id: 4,
      name: 'Lò Văn Đan',
      user_id: [9, 8],
      photo:
        'https://metricleo.com/wp-content/uploads/2021/01/word-image-4.jpeg',
    },
    {
      id: 5,
      name: 'Trần Văn Đoàn5',
      user_id: [9, 8],
      photo:
        'https://metricleo.com/wp-content/uploads/2021/01/word-image-4.jpeg',
    },
  ];
  // đầu tiên gười muốn kết bạn sẽ ấn vào thêm kb khi này trường dữ liệu (ví dụ là userIdWaiting sẽ thêm 1 object {
  //   id: i + 1,
  //   user_id:[{id:1,user_id:1,time:`${i+1}name`}]
  // }vào để người được kết bạn biết là đang có người muốn kết bận với mình, khi người muốn kết bạn ấn đồng ý kết bạn thì sẽ thêm id của user gửi lời mời kết bạn vào trường dữ liệu của người được kết bạn (ví dụ user_id [1,2,3]))
  // b2:khi nào ấn xác nhận thì sẽ ko dispatch dữ liệu luôn mà back về hoặc ấn vào xem tất cả mới dispatch
  const MutualFriends = (data: any) => {
    const mutualFriends = userRole.user_id.filter((make: any) =>
      data.user_id.includes(make),
    );
    return (
      mutualFriends.length > 0 && (
        <View
          style={[
            styles.flex,
            {
              marginTop: widthApp < 739 ? width * 15 : width * 20,
            },
          ]}>
          {mutualFriends?.map((item: any, index: any) =>
            users.map((itemUser: any) => {
              if (item == itemUser.id) {
                if (index <= 2) {
                  return (
                    <Image
                      style={{
                        width: widthApp < 739 ? width * 38 : width * 20,
                        height: widthApp < 739 ? height * 8 : height * 90,
                        borderRadius: 100,
                        marginRight: widthApp < 739 ? width * 15 : width * 20,
                        borderWidth: 1,
                        borderColor: '#BBBBBB',
                        zIndex: index == 0 ? 3 : index == 1 ? 2 : 0,
                        marginLeft:
                          index == 1
                            ? widthApp < 739
                              ? width * -25
                              : width * -20
                            : index == 2
                            ? widthApp < 739
                              ? width * -30
                              : width * -20
                            : 0,
                      }}
                      source={{
                        uri: `${itemUser.photo}`,
                      }}
                    />
                  );
                }
              }
            }),
          )}
          <Text
            style={{
              color: 'black',
              fontSize: widthApp < 739 ? width * 22 : width * 20,
              fontWeight: '400',
            }}>
            {mutualFriends.length} bạn chung
          </Text>
        </View>
      )
    );
  };
  const makeFriend = (data: any) => {
    console.log(data, 'ưdsa2ewdqsa');
  };
  const RenderButtonConfim = (data: any) => {
    const checkFriend = userRole.user_id.find(
      (itemUserRole: any) => itemUserRole == data.id,
    );

    return (
      <View>
        {checkFriend !== undefined ? (
          <View>
            <Text
              style={{
                fontSize: renderWidth([23, 2]),
                color: 'black',
                fontWeight: '400',
                marginTop: renderWidth([10, 5]),
              }}>
              Lời mời được chấp nhận
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#EEEEEE',
                borderRadius: 5,
                marginTop: renderWidth([10, 5]),
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: '500',
                  paddingVertical: 3,
                }}>
                Vẫy tay chào
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={[
              styles.flex,
              {
                marginTop: renderWidth([15, 5]),
              },
            ]}>
            <TouchableOpacity
              onPress={() => makeFriend(data)}
              style={{
                backgroundColor: colors.color_blue,
                borderRadius: 5,
                paddingHorizontal: widthApp < 739 ? width * 40 : width * 20,
                paddingVertical: widthApp < 739 ? width * 10 : height * 20,
                marginRight: 10,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: widthApp < 739 ? width * 25 : height * 20,
                  fontWeight: '500',
                }}>
                Xác nhận
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#EEEEEE',
                borderRadius: 5,
                paddingHorizontal: widthApp < 739 ? width * 80 : width * 20,
                paddingVertical: widthApp < 739 ? width * 10 : height * 20,
                marginRight: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: widthApp < 739 ? width * 25 : height * 20,
                  fontWeight: '500',
                }}>
                Xóa
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: 5}}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: '#fff'}}>
            <View style={[styles.flex, {justifyContent: 'space-between'}]}>
              <View style={styles.flex}>
                <TouchableOpacity
                  onPress={async () => {
                    // Animated.timing(fadeAnim, {
                    //   toValue: 0,
                    //   duration: 1300, // the duration of the animation
                    //   easing: Easing.linear, // the style of animation
                    //   useNativeDriver: false,
                    // }).start();
                    // setToggleGroud(!toggleGroud);
                    null;
                  }}>
                  <IconMenu
                    name="menu"
                    size={widthApp < 739 ? width * 58 : width * 15}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '700',
                    fontSize: widthApp < 739 ? width * 45 : width * 12,
                  }}>
                  Bạn bè
                </Text>
              </View>
              <View style={styles.flex}>
                <TouchableOpacity
                  style={{
                    width: widthApp < 739 ? width * 60 : height * 15,
                    height: widthApp < 739 ? height * 13 : height * 65,
                    backgroundColor: '#DDDDDD',
                    position: 'relative',
                    borderRadius: 100,
                    marginRight: widthApp < 739 ? width * 15 : height * 2,
                  }}>
                  <IconSearch
                    name="search"
                    size={widthApp < 739 ? width * 35 : height * 10}
                    style={[
                      styles.icon,
                      {
                        color: 'black',
                        zIndex: 100,
                        left: widthApp < 739 ? width * 13 : height * 2.5,
                        position: 'absolute',
                        top: widthApp < 739 ? height * 1 : height * 4,
                      },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.flex, {paddingVertical: 10}]}>
            <TouchableOpacity
              style={[
                styles.button,
                {marginLeft: widthApp < 739 ? width * 58 : height * 15},
              ]}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: widthApp < 739 ? width * 25 : height * 15,
                  color: 'black',
                }}>
                Gợi ý
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {marginLeft: widthApp < 739 ? width * 38 : height * 15},
              ]}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: widthApp < 739 ? width * 25 : height * 15,
                  color: 'black',
                }}>
                Bạn bè
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#DDDDDD',
            }}></View>
          <View
            style={[
              styles.flex,
              {
                justifyContent: 'space-between',
                padding: widthApp < 739 ? width * 10 : height * 15,
              },
            ]}>
            <Text
              style={{
                color: 'black',
                fontWeight: '700',
                fontSize: widthApp < 739 ? width * 30 : height * 15,
              }}>
              Lời mời kết bạn
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: widthApp < 739 ? width * 25 : height * 15,
                  color: colors.color_blue,
                  fontWeight: '500',
                }}>
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>
          {userRole.userIdWaiting.map((item: any) =>
            users.map((itemUser: any) => {
              if (item.user_id == itemUser.id) {
                return (
                  <TouchableOpacity
                    style={[
                      styles.flex,
                      {
                        marginVertical:
                          widthApp < 739 ? width * 15 : width * 20,
                        width: '100%',
                        paddingHorizontal:
                          widthApp < 739 ? width * 10 : width * 15,
                      },
                    ]}>
                    <Image
                      style={{
                        width: widthApp < 739 ? width * 155 : width * 20,
                        height: widthApp < 739 ? height * 32 : height * 90,
                        borderRadius: 100,
                        marginRight: widthApp < 739 ? width * 25 : width * 20,
                      }}
                      source={{
                        uri: `${itemUser.photo}`,
                      }}
                    />
                    <View
                      style={[
                        styles.flex,
                        {
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          flexGrow: 1,
                        },
                      ]}>
                      <View>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: widthApp < 739 ? width * 30 : width * 20,
                            fontWeight: '600',
                          }}>
                          {itemUser.name}
                        </Text>
                        {MutualFriends(itemUser)}
                        {RenderButtonConfim(itemUser)}
                      </View>
                      <Text
                        style={{
                          fontSize: widthApp < 739 ? width * 25 : width * 20,
                          fontWeight: '400',
                        }}>
                        8 giờ
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }
            }),
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Friend;

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
  button: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 2,
    zIndex: 100,
  },
});
