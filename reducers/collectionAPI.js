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


export function updateName(collectionId, newCollectionName) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://15.206.72.239:8000/api/v1/collections/updateName/' + collectionId, {
                method: 'PATCH',
                body: JSON.stringify({ newCollectionName: newCollectionName }),
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

export function removeCollection(collectionId) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://15.206.72.239:8000/api/v1/collections/updateName/' + collectionId, {
                method: 'DELETE',
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

export function removeQuotesFromCollection(collectionId, quoteId) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://15.206.72.239:8000/api/v1/collections/removeQuotesFromCollection', {
                method: 'PATCH',
                body: JSON.stringify({ collectionId, quoteId }),
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

export function addQuotesToCollection(quoteData) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch("http://15.206.72.239:8000/api/v1/collections/addQuoteToCollection", {
                method: "PATCH",
                body: JSON.stringify(quoteData),
                headers: { "content-type": "application/json" },
            })
            const { data } = await response.json();
            resolve(data)
        } catch (error) {
            console.log(error, "error")
            reject(error)
        }
    })
}