import {useEffect, useState} from 'react';
import { UserModel } from '../../types';
import User from './user';

const Users = () => {
    
    const [users, setUsers] = useState<UserModel[]>([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'GET',
        })
        .then(res => res.json())
        .then((response) => {
            setUsers(response);
        })
    }, [])

    return (
        <div>
            {users.map((user) => (
                <User user={user} />
            ))}
        </div>
    )
}

export default Users;