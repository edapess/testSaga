import React, {useCallback} from 'react';
import {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {POSTS_FETCH_REQUESTED} from '../store/actions';
import {useAppSelector} from '../store/config';
import {IPost} from '../store/dataTypes';
import {postsSelector} from '../features/HomeScreen/redux/selectors';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const posts = useAppSelector(postsSelector);

  useEffect(() => {
    dispatch({type: POSTS_FETCH_REQUESTED});
  }, [dispatch]);
  const renderItem: ListRenderItem<IPost> = useCallback(({item}) => {
    return (
      <View>
        <Text style={styles.text}>{item?.id}</Text>
      </View>
    );
  }, []);
  return (
    <View style={styles.mainWrapper}>
      {posts.isLoading ? (
        <ActivityIndicator color={'green'} size={'large'} />
      ) : (
        <FlatList
          data={posts.posts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  mainWrapper: {
    backgroundColor: 'black',
  },
});
