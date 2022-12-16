import { Reducer } from "redux";
import { Operation, PostAction, PostState, LoadingState } from "../types/post";

const initialState = {
    state: 'INITIAL' as LoadingState,
    posts: [],
    error: undefined
}

const reducer: Reducer<PostState, PostAction> = (state = initialState, action) => {
    switch(action.type) {
        case Operation.FETCH_POSTS:
            return {
                ...state,
                state: 'LOADING',
                posts: []
            }
        case Operation.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                state: 'SUCCESS',
                posts: action.payload.posts!
            }
        case Operation.FETCH_POSTS_ERROR:
            return {
                ...state,
                state: 'ERROR',
                posts: [],
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default reducer;