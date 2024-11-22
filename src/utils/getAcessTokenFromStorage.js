export const getAcessTokenFromStorage = () => {
    const token = sessionStorage.getItem('spotifyToken');
    if (token !== null) {
        return token
    } else {
        return false;
    }
}