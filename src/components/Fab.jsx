import React from 'react'

const Fab = ({ onClick=()=>console.log('fab'), icon='add' }) => {
    return (
        <button className="icon fab" onClick={onClick}>
            <span className="material-icons">
                {icon}
            </span>
        </button>
    )
}

export default Fab
