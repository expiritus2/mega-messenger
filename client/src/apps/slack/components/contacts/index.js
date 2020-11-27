import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ className }) => (
    <div className={className}>
        Slack Contacts
    </div>
);

Contacts.propTypes = {
    className: PropTypes.string,
};

Contacts.defaultProps = {
    className: '',
};

export default Contacts;
