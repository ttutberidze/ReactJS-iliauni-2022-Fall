import { ChangeEvent, FC, memo } from "react";
import { useTheme } from "../../context/themeContext";

interface UserProps {
    name: string;
    index: number;
    onChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
}

const User: FC<UserProps> = ({name, onChange, index}) => {
    const {theme} = useTheme();
    return (
        <div style={{border: '1px solid #cccccc', ...theme}}>
            <input type='text' value={name} onChange={(event) => onChange(event, index)} />
            <p>Name: {name}</p>
        </div>
    )
}

export default memo(User);
