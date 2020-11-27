import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.scss';

const Button = ({ type, text, className, buttonClassName }) => (
    <div className={className}>
        {/* eslint-disable-next-line react/button-has-type */}
        <button type={type} className={classNames(styles.btn, buttonClassName)}>{text}</button>
    </div>
);

Button.propTypes = {
    className: PropTypes.string,
    buttonClassName: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
};

Button.defaultProps = {
    className: '',
    buttonClassName: '',
    type: 'button',
    text: 'Submit',
};

export default Button;
