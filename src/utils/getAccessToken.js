export const getAcessToken = () => {
    const params = new URLSearchParams(window.location.hash.replace('#', '?'));
    return params.get('acess_token')
}