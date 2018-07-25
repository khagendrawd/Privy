import React from 'react';

const button = (props) => (
    <button {...props} className='primeryButton'>{props.children}</button>
);

export default button;