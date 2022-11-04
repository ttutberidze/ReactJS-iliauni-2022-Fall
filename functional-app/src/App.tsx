import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import './App.css';
import User from './User';

interface UserModel {
  name: string;
}

function App() {

  // const [name, setName] = useState('Temo');
  // const [age, setAge] = useState(30)

  // useEffect(() => {
  //   console.log('componentDidUpdate')
  // })

  // useEffect(() => {
  //   console.log('componentDidMount')
  // }, [])

  // useEffect(() => {
  //   console.log('Age was changed',)
  //   return () => {
  //     console.log('prevAge', age)
  //   }
  // }, [age])


  const [users, setUsers] = useState<UserModel[]>([{name: 'Hello'}, {name: 'Temo'}]);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>, index: number) => {
    setUsers((prevUsers) => {
      const localUsers = [...prevUsers];
      const user = {...localUsers[index]};
      user.name = event.target.value;
      localUsers[index] = user;
      return localUsers;
    })
  }, [])

  const memoObj = useMemo(() => {
    return 'Hello World';
  }, [])

  const addUser = () => {
    const localUsers = [...users];
    localUsers.push({name: ''});
    setUsers(localUsers);
  }

  return (
    <div className="App">
      {users.map((user, index) => {
          return <User 
                    key={index}
                    name={user.name}
                    index={index}
                    onChange={onChange} 
                    />
        })}
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default App;
