const user = ({name, onChange}) => {
    return (
        <div style={{border: '1px solid #cccccc'}}>
            <input type='text' value={name} onChange={onChange} />
            <p>Name: {name}</p>
        </div>
    )
}

export default user;
