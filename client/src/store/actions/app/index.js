import { createAction } from 'redux-actions';

export const loadAppsAction = createAction('LOAD_APPS_ACTION');
export const setCurrentAppAction = createAction('SET_CURRENT_APP_ACTION');
export const addAppAction = createAction('ADD_APP_ACTION');
export const deleteAppAction = createAction('DELETE_APP_ACTION');
