import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Messages, Input, Contacts } from './components';

import styles from './styles.scss';

const Telegram = ({ className }) => (
    <div className={classNames(styles.main, className)}>
        <Contacts className={styles.contacts} />
        <div className={styles.content}>
            <Messages className={styles.messages} />
            <Input />
        </div>
    </div>
);

Telegram.propTypes = {
    className: PropTypes.string,
};

Telegram.defaultProps = {
    className: '',
};

export default Telegram;
