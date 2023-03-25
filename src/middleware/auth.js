const isLoggedIn = () => {
    const user = localStorage.getItem('user');
    if (!user || user === 'undefined') {
        return false;
    }
    return true;
}

export default isLoggedIn;