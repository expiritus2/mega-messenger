import React from 'react';
import PropTypes from 'prop-types';

import AddMessenger from './add-messenger';

const Sidebar = ({ className }) => (
    <div className={className}>
        <AddMessenger />
    </div>
);

Sidebar.propTypes = {
    className: PropTypes.string,
};

Sidebar.defaultProps = {
    className: '',
};

export default Sidebar;
