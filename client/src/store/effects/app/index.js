import Api from 'store/effects/core/api';
import { setCurrentAppAction, loadAppsAction, addAppAction, deleteAppAction } from 'store/actions/app';
import { fetchApps } from 'api/app';

export const setCurrentApp = (currentApp) => (dispatch) => {
    dispatch(setCurrentAppAction(currentApp));
};

export const addApp = (id) => (dispatch) => {
    dispatch(addAppAction(id));
};

export const deleteApp = (id) => (dispatch) => {
    dispatch(deleteAppAction(id));
};

export const load = Api.execBase(loadAppsAction, fetchApps);
