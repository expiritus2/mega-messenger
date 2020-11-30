import React from 'react';
import PropTypes from 'prop-types';

const Messages = ({ className }) => (
    <div className={className}>
        Outlook Messages
    </div>
);

Messages.propTypes = {
    className: PropTypes.string,
};

Messages.defaultProps = {
    className: '',
};

export default Messages;
