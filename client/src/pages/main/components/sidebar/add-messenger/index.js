import React, { useState, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { addApp } from 'store/effects/app';

import { MESSENGERS } from 'settings/app/messengers';

import { useOutsideClick } from 'hooks';

import styles from './styles.scss';

const AddMessenger = ({ className, messengers, addAppInner }) => {
    const addRef = useRef();
    const [open, setOpen] = useState(false);

    useOutsideClick(addRef, () => setOpen(false));

    const onClick = useCallback(() => setOpen(!open), [open]);
    const onAdd = useCallback((id) => addAppInner(id), [addAppInner]);

    const uniqueMessengers = useMemo(() => (
        MESSENGERS.filter((msgr) => !messengers.includes(msgr.id))
    ), [messengers]);

    return (
        <div ref={addRef} className={classNames(className, styles.messengers)} onClick={onClick}>
            <div onClick={onClick} className={styles.add}>Add</div>
            {open && (
                <ul className={styles.list}>
                    {uniqueMessengers.map(({ id, displayName, Icon }) => (
                        <li key={id} className={styles.item} onClick={() => onAdd(id)}>
                            <Icon className={styles.icon} />
                            <span className={styles.name}>{displayName}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

AddMessenger.propTypes = {
    className: PropTypes.string,
    addAppInner: PropTypes.func.isRequired,
    messengers: PropTypes.arrayOf(PropTypes.string),
};

AddMessenger.defaultProps = {
    className: '',
    messengers: [],
};

function mapStateToProps(state) {
    return {
        messengers: state.app.state.messengers,
    };
}

export default connect(
    mapStateToProps,
    {
        addAppInner: addApp,
    },
)(AddMessenger);
