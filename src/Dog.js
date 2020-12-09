import React from 'react';

const Dog = (props) => {
    return (
        <div className="child">
            <img className="image" src={props.url}/>
        </div>
    )
}
export default Dog;