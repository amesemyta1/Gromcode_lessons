const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
}

const addPropertyV2 = (userData, userId) => {
    userData.id = userId;
    Object.assign(userData);
    return userData;
}

const addPropertyV3 = (userData, userId) => {
    let copy = Object.assign({}, userData);
    copy.id = userId;
    return copy;
}

const addPropertyV4 = (userData, userId) => {
    result = { ...userData};
    result.id = userId;
    return result;
}