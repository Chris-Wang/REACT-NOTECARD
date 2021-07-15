
const LocalHostMap = (path) => {
    const basePath = 'http://localhost:8080';
    const url = `${basePath}/notes/${path}`;
    return fetch(url)
    .then((response) => response.json());
}

export default LocalHostMap;