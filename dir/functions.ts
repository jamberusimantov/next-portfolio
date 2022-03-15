const fetcher = (url: string, method = 'GET', body?: object) => {
    return fetch(url, { method, body: body ? JSON.stringify(body) : undefined })
        .then(res => res.json())
}

const isValidId = (id: any) => new String(id).match(/^[0-9a-fA-F]{24}$/) ? true : false;

export {
    fetcher,
    isValidId,
}