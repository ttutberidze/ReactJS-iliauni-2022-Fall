import { Link } from "react-router-dom";
import { UserModel } from "../../../types"

interface Props {
    user: UserModel
}

const User: React.FC<Props> = ({user: {id, name, username}}) => {
    return (
        <div className="user">
            <p>{id}</p>
            <p>{name}</p>
            <p>{username}</p>
            <p><Link to={`/users/${id}`}>View</Link></p>
        </div>
    )
}

export default User;