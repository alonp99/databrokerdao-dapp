const localstorage = (() => {
    if (typeof window === 'undefined')
        return new Proxy({}, { get: () => () => {} });

    return localStorage;
})();

export default localstorage;
