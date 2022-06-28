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
    Object.assign({}, userData.id = userId);
    return userData;
}

const addPropertyV4 = (userData, userId) => {
    result = { ...userData.id = userId};
    return result;
}