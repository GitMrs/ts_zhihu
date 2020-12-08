import { createStore } from 'vuex';
export interface ResponseType<p = {}> {
  code: number;
  msg: string;
  data: p;
}
export interface ImageProps {
  _id?: string;
  url: string;
  createdAt?: string;
  fitUrl?: string;
}
export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
  column?: string;
  email?: string;
  avatar?: ImageProps;
  description?: string;
}

interface ColumnsProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
interface PostProps {
  _id?: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps | string;
  createdAt?: string;
  column: string;
  author?: string;
  isHTML?: boolean;
}
export interface GlobalDataProps {
  columns: ColumnsProps[];
  posts: PostProps[];
  user: UserProps;
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: [],
    user: { isLogin: false }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, nickName: 'viking' };
    }
  }
});
export default store;