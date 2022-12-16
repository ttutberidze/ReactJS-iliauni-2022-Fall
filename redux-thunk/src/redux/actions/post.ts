import { PostModel } from "../../types"
import { Operation, PostAction, PostState } from "../types/post"
import axios from "axios";
import { ThunkDispatch } from "redux-thunk";

export const fetchPostsRequest = () => {
    return {type: Operation.FETCH_POSTS, payload: {}}
}

export const fetchPostsSuccess = (posts: PostModel[]) => {
    return {type: Operation.FETCH_POSTS_SUCCESS, payload: { posts }}
}

export const fetchPostsError = (error: Error) => {
    return {type: Operation.FETCH_POSTS_SUCCESS, payload: { error }}
}

export const fetchPosts = () => {
    return (dispatch: ThunkDispatch<PostState, void, PostAction>) => {
        dispatch(fetchPostsRequest())
        axios.get<PostModel[]>('posts')
            .then((response) => {
                dispatch(fetchPostsSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchPostsError(error))
            })
    }
}