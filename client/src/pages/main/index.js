import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { load } from 'store/effects/app';

import { Sidebar, App } from './components';

import styles from './styles.scss';

const Main = ({ loadData }) => {
    useEffect(() => {
        loadData();
    }, []); // eslint-disable-line

    return (
        <div className={styles.container}>
            <Sidebar className={styles.sidebar} />
            <App className={styles.app} />
        </div>
    );
};

Main.propTypes = {
    loadData: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        messengers: state.app.data.data,
    };
}

export default connect(
    mapStateToProps,
    {
        loadData: load,
    },
)(Main);
