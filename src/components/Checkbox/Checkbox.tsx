import React from "react";

const Checkbox = ({updateCheckbox, checked}) => {
    return (
        <input type="checkbox" onChange={(e) => updateCheckbox(e)} checked={checked} />
    )
}

export default Checkbox;