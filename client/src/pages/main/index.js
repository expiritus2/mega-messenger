import React from 'react';
import { connect } from 'react-redux';

import { Sidebar, Messages, Input } from './components';

import styles from './styles.scss';

const Main = () => (
    <div className={styles.container}>
        <Sidebar className={styles.sidebar} />
        <div className={styles.main}>
            <Messages className={styles.messages} />
            <Input />
        </div>
    </div>
);

Main.propTypes = {

};

export default connect(null)(Main);
