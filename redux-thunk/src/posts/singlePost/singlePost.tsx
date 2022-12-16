import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {axiosInstance} from '../../axios/axios';
import { PostModel } from '../../types';

const SinglePost = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [post, setPost] = React.useState<PostModel>()
    
    React.useEffect(() => {
        //axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        axiosInstance.get("posts/" + params.postId)
            .then(response => {
                setPost(response.data)
            })
            .catch(e => {
                navigate('/error', {replace: true})
            })
    }, [navigate, params.postId])

    return (
        <div>
            {post && (
                <>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    )
}

export default SinglePost;