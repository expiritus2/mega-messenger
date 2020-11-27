import React, { useCallback } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AiFillCloseCircle } from 'react-icons/ai';
import { setCurrentApp, deleteApp } from 'store/effects/app';

import styles from '../styles.scss';

const Item = ({ id, displayName, Icon, currentApp, setCurrentAppInner, deleteAppInner }) => {
    const onClickItem = useCallback(() => setCurrentAppInner(id), [id, setCurrentAppInner]);
    const onRemoveItem = useCallback((e) => {
        e.stopPropagation();
        deleteAppInner(id);
    }, [id, deleteAppInner]);

    return (
        <li
            className={classNames({
                [styles.item]: true,
                [styles.active]: currentApp === id,
            })}
            onClick={onClickItem}
        >
            <div className={styles.element}>
                <Icon className={styles.icon} />
                <span>{displayName}</span>
            </div>
            <AiFillCloseCircle className={styles.remove} onClick={onRemoveItem} />
        </li>
    );
};

Item.propTypes = {
    Icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    id: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    currentApp: PropTypes.string,
    setCurrentAppInner: PropTypes.func.isRequired,
    deleteAppInner: PropTypes.func.isRequired,
};

Item.defaultProps = {
    currentApp: null,
};

export default connect(
    null,
    {
        setCurrentAppInner: setCurrentApp,
        deleteAppInner: deleteApp,
    },
)(Item);
