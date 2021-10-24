import React from "react";

const ActionToolbar = ({editData, deleteData}) => {
    return (
        <div className="table__actions">
            <a href="#" onClick={() => editData()}><i className="far fa-edit"></i></a>
            <a href="#" onClick={() => deleteData()}><i className="far fa-trash-alt"></i></a>
        </div>
    )
}

export default ActionToolbar;