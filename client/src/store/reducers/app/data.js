import { handleActions } from 'redux-actions';
import { IDLE } from 'settings/constants/api-state';
import { getDataFor } from 'store/helpers';

import { loadAppsAction } from 'store/actions/app';

const initialData = {
    state: IDLE,
    data: undefined,
    meta: {},
};

export default handleActions({
    [loadAppsAction]: (state, { payload }) => ({
        ...state,
        state: payload.state,
        data: getDataFor('data', payload, initialData),
        meta: getDataFor('meta', payload, initialData),
    }),
}, initialData);
