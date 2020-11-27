import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import List from './list';

import styles from './styles.scss';

const Apps = ({ messengers, currentApp, className }) => (
    <div className={classNames(styles.apps, className)}>
        <List messengers={messengers} currentApp={currentApp} />
    </div>
);

Apps.propTypes = {
    className: PropTypes.string,
    messengers: PropTypes.arrayOf(PropTypes.string),
    currentApp: PropTypes.string,
};

Apps.defaultProps = {
    className: '',
    messengers: [],
    currentApp: null,
};

function mapStateToProps(state) {
    return {
        messengers: state.app.state.messengers,
        currentApp: state.app.state.currentApp,
    };
}

export default connect(mapStateToProps)(Apps);
