import React from 'react';
import classNames from 'classnames';

import styles from './index.module.css';


/**
 * @module MyComponent
 * 
 * @description Description for MyComponent
 */
export default ({ className, ...props }) => {
    return (
        <div
            className={classNames(
                styles.myComponent,
                className
            )}
            {...props}
        >
            My Component
        </div>
    );
};
