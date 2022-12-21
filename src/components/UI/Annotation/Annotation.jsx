import React from 'react';
import classes from './Annotation.module.css'
const Annotation = ({children}) => {
    return (
        <div className={classes.annotation}>
            {children}
        </div>
    );
};

export default Annotation;