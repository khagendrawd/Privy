import React from 'react';

const button = (props) => (
    <button {...props}>{props.children}</button>
);

export default button;