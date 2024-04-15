import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
        likes: [],
    },
    {
        id: '1',
        user_id: '2',
        title: 'Trần Văn Đoàn',
        image: [
            'https://vcdn1-dulich.vnecdn.net/2022/05/27/du-lich-Viet-Nam-3-1653637304.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=JTkFADdHoPj9uPujAqAv0w',
            'https://toanthaydinh.com/wp-content/uploads/2020/04/phong-canh-dep-6.jpg',
        ],
        likes: [],
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
        likes: [],
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
        likes: [{ "emotion": 4, "id_user": 3 }, { "emotion": 2, "id_user": 2 }],
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
// import CateAPI, { add, remove, upload } from "../API/CateAPxI";
// async function getAll() {
//   const { data: categoris } = await CateAPI.getAll();
//   const logStorage: any = await AsyncStorage.getItem('user');
//   const user = JSON.parse(logStorage);
//   const dataCategoris:any = [];
//   categoris?.filter((item:any) => {
//     if (item.user_id == user.data._id) {
//       dataCategoris.push(item);
//     }
//   });

//   return dataCategoris;
// }
export const getAllDataPost = createAsyncThunk(
    "post/getAllDataPost",
    async () => {
        return data;
    }
);
// export const addCategori = createAsyncThunk(
//   "categori/addCategori",
//   async (data) => {
//     await add(data);
//     return getAll();
//   }
// );
// export const removeCategori = createAsyncThunk(
//   "categori/removeCategori",
//   async (data) => {
//     await remove(data);
//     return getAll();
//   }
// );
export const uploadAllDataPost = createAsyncThunk(
  "uploadPost/uploadAllDataPost",
  async (data:any) => {
    // await upload(data.id, data.data);
    return data;
  }
);
const postSlice = createSlice({
    name: "posts",
    initialState: {
        value: [],
        loading: false,
    },
    reducers: {
        getData: (state: any, active: any) => {
            console.log('có chạy vào nha')
            state.value = data
        },
        uploadLike: (state: any, active: any) => {
            state.value = active.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllDataPost.fulfilled, (state: any, action: any) => {
            state.loading = true;
            state.value = action.payload;
        })
        //     builder.addCase(removeCategori.fulfilled, (state: any, action: any) => {
        //         state.value = action.payload;
        //     });
        builder.addCase(uploadAllDataPost.fulfilled, (state: any, action: any) => {
            console.log('có vào nhé mày1')
            console.log('có vào nhé mày',action.payload)
            state.value = action.payload;
        });
    },
});
export const { getData, uploadLike } = postSlice.actions
export default postSlice.reducer;