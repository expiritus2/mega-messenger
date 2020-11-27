import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { TELEGRAM, SKYPE, SLACK } from 'settings/app/messengers';

import { Telegram, Skype, Slack } from 'apps';

const apps = {
    [TELEGRAM]: Telegram,
    [SKYPE]: Skype,
    [SLACK]: Slack,
};

const AppComponent = ({ currentApp, className }) => {
    const CurrentApp = apps[currentApp];

    if (!CurrentApp) return null;

    return (
        <div className={className}>
            <CurrentApp />
        </div>
    );
};

AppComponent.propTypes = {
    className: PropTypes.string,
    currentApp: PropTypes.string,
};

AppComponent.defaultProps = {
    className: '',
    currentApp: null,
};

function mapStateToProps(state) {
    return {
        currentApp: state.app.state.currentApp,
    };
}

export default connect(mapStateToProps)(AppComponent);
