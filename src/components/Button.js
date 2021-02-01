const Button = ({color, text, onClick}) => {
    return (
        <div>
            <button onClick={onClick} style ={{backgroundColor: color}} className="btn">{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'red',
    text: 'Wanna Add Task?'
}

export default Button
