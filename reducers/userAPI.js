import { useAppSelector } from "@/hooks/hooks";

export function createUser(userData) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://15.206.72.239:8000/api/v1/users/register', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: { 'content-type': 'application/json' },
            });
            const data = await response.json();
            resolve({ data });
        } catch (error) {
            console.log(error, "error")
            reject(error);
        }
    });
}

export function fetchUser(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://15.206.72.239:8000/api/v1/users/user/' + id, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            });
            const { data } = await response.json();
            resolve({ data });
        } catch (error) {
            console.log(error, "error")
            reject(error);
        }
    });
}

export function addQuoteToUser(userId, quoteId) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(
                `http://15.206.72.239:8000/api/v1/users/${userId}/addQuote/${quoteId}`,
                {
                    method: 'PATCH',
                    headers: { 'content-type': 'application/json' },
                }
            )
            const { data } = await response.json();
            return resolve({ data });
        } catch (error) {
            console.log(error, "error")
            reject(error)
        }
    })
}

export function removeQuotesFromUser(userId, quoteId) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(userId, quoteId, "dddkjhd")
            const response = await fetch(
                `http://15.206.72.239:8000/api/v1/users/${userId}/removeQuote/${quoteId}`,
                {
                    method: 'PATCH',
                    headers: { 'content-type': 'application/json' },
                }
            )
            const { data } = await response.json();
            return resolve({ quoteId });
        } catch (error) {
            console.log(error, "error")
            reject(error)
        }
    })
}