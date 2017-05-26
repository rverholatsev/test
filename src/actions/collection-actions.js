import * as types from '../actions/action-types';

export function getCollectionsRequest() {
    return {
        type: types.GET_COLLECTIONS_REQUEST,
    };
}

export function getCollectionsSuccess(data) {
    return {
        type: types.GET_COLLECTIONS_SUCCESS,
        data: data
    };
}

export function getCollectionSuccess(data) {
    return {
        type: types.GET_COLLECTION_SUCCESS,
        data: data
    };
}

export function getCollectionFailure() {
    return {
        type: types.GET_COLLECTIONS_FAILURE,
    };
}