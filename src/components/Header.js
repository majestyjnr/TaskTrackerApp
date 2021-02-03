// import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({onAdd, showAdd}) => {
    // const onClick = () => {
    //     console.log('The add button has been clicked!!')
    // }
    return (
        <header className="header">
            <h1>Task Tracker</h1>

            { showAdd ?  <Button onClick={onAdd} color="red" text="Close"/> : <Button onClick={onAdd} color="blue" text="Add Task"/>}
            
        </header>
    )
}

export default Header
