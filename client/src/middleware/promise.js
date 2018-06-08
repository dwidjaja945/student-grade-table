export default store => next => async action => {
    if(!action.payload || !action.payload.then) {
        return next(action);
    };

    const response = await action.payload;

    const newAction = {
        ...action,
        payload: response
    };
    store.dispatch(newAction);

    return action.payload;

}