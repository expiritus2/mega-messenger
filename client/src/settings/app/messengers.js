import { FaTelegramPlane, FaSkype, FaSlackHash } from 'react-icons/fa';
import { SiMicrosoftoutlook } from 'react-icons/si';

export const TELEGRAM = 'telegram';
export const SKYPE = 'skype';
export const SLACK = 'slack';
export const OUTLOOK = 'outlook';

export const MESSENGERS = [
    { id: TELEGRAM, displayName: 'Telegram', Icon: FaTelegramPlane },
    { id: SKYPE, displayName: 'Skype', Icon: FaSkype },
    { id: SLACK, displayName: 'Slack', Icon: FaSlackHash },
    { id: OUTLOOK, displayName: 'Outlook', Icon: SiMicrosoftoutlook },
];
