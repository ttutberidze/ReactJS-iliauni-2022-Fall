import React from 'react';
import Post from './post/post';
import Loading from '../loading/loading';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/post';
import { ThunkDispatch } from 'redux-thunk';
import { PostAction, PostState } from '../redux/types/post';
import { useSelector } from 'react-redux';

const Posts = () => {

    const {state, posts} = useSelector((state: PostState) => state)
    const dispatch: ThunkDispatch<PostState, void, PostAction> = useDispatch();

    React.useEffect(() => {
        if(state === 'INITIAL') {
            dispatch(fetchPosts());
        }
    }, [dispatch, state]);

    let content = [<Loading key='loading' />]
    if(posts.length > 0) {
        content = posts.map((post) => {
            return <Post key={post.id} body={post.body} title={post.title} id={post.id} />
        })
    }

    return <>
    {content}
    </>;
}

export default Posts;