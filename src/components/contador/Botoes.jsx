import React from "react";

export default props => {
    return (
        <div>
            <button onClick={props.incremente}>+</button>
            <button onClick={props.decremente}>-</button>
        </div>
    )
}