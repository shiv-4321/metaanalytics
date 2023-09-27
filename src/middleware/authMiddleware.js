export const getToken = () => {
    let currToken = localStorage.getItem('user');
    if(currToken.token) {
        return currToken;
    }
};