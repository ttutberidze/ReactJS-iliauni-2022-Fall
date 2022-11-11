import {useState, useEffect} from 'react';
import { UserModel } from '../../../types';
import {useParams} from 'react-router-dom';

const SingleUser = () => {
    const [user, setUser] = useState<UserModel>();
    const {userId} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'GET',
        })
        .then(res => res.json())
        .then((response) => {
            setUser(response);
        })
    }, [userId])

    return (
        <div>
            <p>{user?.name}</p>
            <p>{user?.username}</p>
            <p>{user?.email}</p>
        </div>
    )
}

export default SingleUser;