import { ChangeEvent, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import User from './user';

interface State {
  show: boolean;
}

interface Action {
  type: string;
}

interface UserModel {
  name: string;
}

const reducerFunction = (state: State, action: Action) => {
  switch(action.type) {
    case 'TOGGLE':
      return {
        show: !state.show
      }
    default: return state;
  }
}

function Main() {

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
  const [{show}, dispatch] = useReducer(reducerFunction, { show: true });

  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>, index: number) => {
    setUsers((prevUsers) => {
      const localUsers = [...prevUsers];
      const user = {...localUsers[index]};
      user.name = event.target.value;
      localUsers[index] = user;
      return localUsers;
    })
  }, [])

  // const memoObj = useMemo(() => {
  //   return 'Hello World';
  // }, [])

  const addUser = () => {
    const localUsers = [...users];
    localUsers.push({name: ''});
    setUsers(localUsers);
  }
  console.log(inputRef);

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  const searchHandler = () => {
    console.log(inputRef.current?.value);
  }
  
  return (
    <div className="main">
      {show && users.map((user, index) => {
          return <User 
                    key={index}
                    name={user.name}
                    index={index}
                    onChange={onChange} 
                    />
        })}
      <input ref={ inputRef } />
      <button onClick={searchHandler}>Search</button>
      <button onClick={() => dispatch({type: 'TOGGLE'})}>Toggle</button>
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default Main;
