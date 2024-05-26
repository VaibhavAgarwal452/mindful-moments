export function getCollections(userId) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://15.206.72.239:8000/api/v1/collections/getCollection/' + userId, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            });
            const { data } = await response.json();
            resolve(data);
        } catch (error) {
            console.log(error, "error")
            reject(error);
        }
    });
}

export function create(userId, collectionName) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://15.206.72.239:8000/api/v1/collections/create', {
                method: 'POST',
                body: JSON.stringify({ userId, collectionName }),
                headers: { 'content-type': 'application/json' },
            });
            const { data } = await response.json();
            resolve(data);
        } catch (error) {
            console.log(error, "error")
            reject(error);
        }
    });
}