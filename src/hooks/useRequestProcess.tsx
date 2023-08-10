import {useQuery} from '@tanstack/react-query';
import apiClient from '../api/api';

export const useRequestProcess = () => {
  const fetchPosts = async () => {
    const {data} = await apiClient.get('/posts');
    return data;
  };

  const fetchSinglePost = async (postId: number) => {
    const {data} = await apiClient.get(`/comments?postId=${postId}`);
    return data;
  };

  const usePosts = () => useQuery({queryKey: ['posts'], queryFn: fetchPosts});
  const useSinglePost = (postId: number) =>
    useQuery(['posts', postId], () => fetchSinglePost(postId));

  return {usePosts, useSinglePost};
};
