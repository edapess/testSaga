import {axiosInstance} from './axios';

export const getPostsApi = async () => {
  try {
    const posts = await axiosInstance.get('/posts');
    return posts;
  } catch (error) {
    console.log('🚀 -> error->', error);
  }
};
