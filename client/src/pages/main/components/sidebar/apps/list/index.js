import React from 'react';
import PropTypes from 'prop-types';

import { MESSENGERS } from 'settings/app/messengers';

import Item from '../Item';

import styles from '../styles.scss';

const List = ({ messengers, currentApp }) => (
    <ul className={styles.list}>
        {messengers.map((messengerId) => {
            const messengerData = MESSENGERS.find((mess) => mess.id === messengerId);

            if (!messengerData) return null;

            return <Item key={messengerId} currentApp={currentApp} {...messengerData} />;
        })}
    </ul>
);

List.propTypes = {
    messengers: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentApp: PropTypes.string,
};

List.defaultProps = {
    currentApp: null,
};

export default List;
