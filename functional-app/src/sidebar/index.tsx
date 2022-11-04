import { useTheme } from "../context/themeContext";

const Sidebar = () => {
    const {changeTheme, theme} = useTheme()
    return (
        <div className="sidebar" style={theme}>
            <p>I'm Sidebar</p>
            <button onClick={changeTheme}>Toggle Theme</button>
        </div>
    )
}

export default Sidebar;