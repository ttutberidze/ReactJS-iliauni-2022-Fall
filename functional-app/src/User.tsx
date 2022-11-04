import { ChangeEvent, FC, memo } from "react";

interface UserProps {
    name: string;
    index: number;
    onChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
}

const user: FC<UserProps> = ({name, onChange, index}) => {
    console.log(name, 'rendered')
    return (
        <div style={{border: '1px solid #cccccc'}}>
            <input type='text' value={name} onChange={(event) => onChange(event, index)} />
            <p>Name: {name}</p>
        </div>
    )
}

export default memo(user);
