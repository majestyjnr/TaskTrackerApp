// import PropTypes from 'prop-types'
import Button from "./Button";

const Header = () => {
    const onClick = () => {
        console.log('The add button has been clicked!!')
    }
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button onClick={onClick} color="blue" text="Add Task"/>
            
        </header>
    )
}

export default Header
