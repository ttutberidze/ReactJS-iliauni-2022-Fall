import { Action } from "redux";
import { PostModel } from "../../types";

export type LoadingState = 'INITIAL'|'LOADING'|'SUCCESS'|'ERROR';

export enum Operation {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
}

export interface PostState {
    state: LoadingState;
    posts: PostModel[];
    error?: Error;
}

export interface PostAction extends Action<Operation> {
    payload: {posts?: PostModel[];error?: Error};
}