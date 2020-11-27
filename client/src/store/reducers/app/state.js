import { handleActions } from 'redux-actions';
import { PENDING } from 'settings/constants/api-state';

import { setCurrentAppAction, loadAppsAction, addAppAction, deleteAppAction } from 'store/actions/app';

const initialData = {
    pending: false,
    currentApp: null,
    messengers: [],
};

export default handleActions({
    [loadAppsAction]: (state, { payload }) => ({
        ...state,
        pending: payload.state === PENDING,
        messengers: payload.data && payload.data.messengers,
    }),
    [setCurrentAppAction]: (state, { payload }) => ({
        ...state,
        currentApp: payload,
    }),
    [addAppAction]: (state, { payload }) => ({
        ...state,
        messengers: [...state.messengers, payload],
    }),
    [deleteAppAction]: (state, { payload }) => {
        const id = payload;
        const appIndex = state.messengers.findIndex((msgr) => msgr === id);

        if (appIndex !== -1) {
            state.messengers.splice(appIndex, 1);
        }

        return {
            ...state,
            messengers: [...state.messengers],
            currentApp: null,
        };
    },
}, initialData);
