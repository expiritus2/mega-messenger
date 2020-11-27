import { TELEGRAM } from 'settings/app/messengers';

export function fetchApps(/* cfg */) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: { messengers: [TELEGRAM] } });
        }, 1000);
    });
}
