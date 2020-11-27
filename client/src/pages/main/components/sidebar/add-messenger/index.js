import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MESSENGERS } from 'settings/app/messengers';

import { useOutsideClick } from 'hooks';

import styles from './styles.scss';

const AddMessenger = ({ className }) => {
    const addRef = useRef();
    const [open, setOpen] = useState(false);

    useOutsideClick(addRef, () => setOpen(false));

    const onClick = useCallback(() => setOpen(!open), [open]);

    return (
        <div ref={addRef} className={classNames(className, styles.messengers)} onClick={onClick}>
            <div onClick={onClick} className={styles.add}>Add Messenger</div>
            {open && (
                <ul className={styles.list}>
                    {MESSENGERS.map(({ name, Icon }) => (
                        <li key={name} className={styles.item}>
                            <Icon />
                            {' '}
                            { name }
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

AddMessenger.propTypes = {
    className: PropTypes.string,
};

AddMessenger.defaultProps = {
    className: '',
};

export default AddMessenger;
