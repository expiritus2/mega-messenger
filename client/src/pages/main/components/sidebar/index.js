import React from 'react';
import PropTypes from 'prop-types';

import AddMessenger from './add-messenger';
import Apps from './apps';

const Sidebar = ({ className }) => (
    <div className={className}>
        <AddMessenger />
        <Apps />
    </div>
);

Sidebar.propTypes = {
    className: PropTypes.string,
};

Sidebar.defaultProps = {
    className: '',
};

export default Sidebar;
