import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'; // Correct import path for QueryClient
import {useRequestProcess} from './useRequestProcess';
import apiClient from '../api/api';

// Mock the apiClient
jest.mock('../api/api', () => ({
  get: jest.fn(),
}));
const queryClient = new QueryClient();

const Wrapper = ({children}: {children: any}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useRequestProcess', () => {
  test('usePosts should fetch and return posts data', async () => {
    const mockPostsData = [
      {id: 1, title: 'Post 1'},
      {id: 2, title: 'Post 2'},
    ];

    // Mock the API response
    (apiClient.get as jest.Mock).mockResolvedValueOnce({data: mockPostsData});

    // Create a new QueryClient instance

    const {result, waitForNextUpdate} = renderHook(
      () => useRequestProcess().usePosts(),
      // Provide the QueryClient to the QueryClientProvider
      {
        wrapper: Wrapper,
      },
    );

    // The hook should be in loading state initially
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();

    // Wait for the query to resolve
    await waitForNextUpdate();

    // The hook should have the fetched data after resolving
    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mockPostsData);

    // Make sure the API was called with the correct URL
    expect(apiClient.get).toHaveBeenCalledWith('/posts');
  });

  test('useSinglePost should fetch and return single post data', async () => {
    const mockPostId = 1;
    const mockSinglePostData = [
      {id: 1, text: 'Comment 1'},
      {id: 2, text: 'Comment 2'},
    ];

    // Mock the API response for single post
    (apiClient.get as jest.Mock).mockResolvedValueOnce({
      data: mockSinglePostData,
    });

    // Create a new QueryClient instance

    const {result, waitForNextUpdate} = renderHook(
      () => useRequestProcess().useSinglePost(mockPostId),
      // Provide the QueryClient to the QueryClientProvider
      {
        wrapper: Wrapper,
      },
    );

    // The hook should be in loading state initially
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();

    // Wait for the query to resolve
    await waitForNextUpdate();

    // The hook should have the fetched data after resolving
    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mockSinglePostData);

    // Make sure the API was called with the correct URL
    expect(apiClient.get).toHaveBeenCalledWith(
      `/comments?postId=${mockPostId}`,
    );
  });
});
