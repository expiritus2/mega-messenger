import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TextInput, Button } from 'components';

import styles from './styles.scss';

const Input = ({ className }) => (
    <div className={classNames(styles.input, className)}>
        <TextInput />
        <Button text="Send" className={styles.btn} />
    </div>
);

Input.propTypes = {
    className: PropTypes.string,
};

Input.defaultProps = {
    className: '',
};

export default Input;
