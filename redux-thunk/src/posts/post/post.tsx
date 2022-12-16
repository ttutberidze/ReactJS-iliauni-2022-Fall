import React from 'react';
import {Link} from 'react-router-dom';
import { PostModel } from '../../types';

const Post: React.FC<PostModel> = (props) => {
    return (
        <div className='Post'>
            <p>{props.title}</p>
            <p>{props.body}</p>
            <p><Link to={'/posts/' + props.id}>View Post Data</Link></p>
        </div>
    )
}

export default Post;