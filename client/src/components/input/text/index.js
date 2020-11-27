import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.scss';

const TextInput = ({ className }) => <input className={classNames(styles.input, className)} type="text" />;

TextInput.propTypes = {
    className: PropTypes.string,
};

TextInput.defaultProps = {
    className: '',
};

export default TextInput;
