import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './styles.scss';
import { Input, Messages, Contacts } from './components';

const Skype = ({ className }) => (
    <div className={classNames(styles.main, className)}>
        <Contacts className={styles.contacts} />
        <div className={styles.content}>
            <Messages className={styles.messages} />
            <Input />
        </div>
    </div>
);

Skype.propTypes = {
    className: PropTypes.string,
};

Skype.defaultProps = {
    className: '',
};

export default Skype;
