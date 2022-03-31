import React from "react";




const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'tomato' : 'black',
        fontSize: `20px`
    }
    return (
    <span className='list-item' style = {style}>
        {label}
    </span>
    )
}




export default TodoListItem;