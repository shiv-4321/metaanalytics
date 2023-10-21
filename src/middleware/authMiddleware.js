export const getToken = () => {
    let currToken = JSON.parse(localStorage.getItem('user'));
    if (currToken !== null) {
        return currToken;
    }
};


export const resetToken = () => {
    localStorage.removeItem('user');
    return null;
}

export const useAuth = () => {
    let fetchToken = getToken();console.log(fetchToken);
    if (fetchToken === undefined || fetchToken.token === null)
        return false;

    return true;
};