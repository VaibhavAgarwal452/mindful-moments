import Api from "@/common/Api";

export function createUser(userData) {
    console.log("userData", userData);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(Api.user.register, {
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

export function login(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(Api.user.login, {
                method: 'POST',
                body: JSON.stringify({ email: email, password: password }),
                headers: { 'content-type': 'application/json' },
            });
            if (response.status === 200) {
                const { data } = await response.json();
                resolve({ data });
            } else {
                resolve(response);
            }
        } catch (error) {
            console.log(error, "error")
            reject(error);
        }
    })
}

export function updateUser(user) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(Api.user.updateUser + user._id, {
                method: 'PATCH',
                body: JSON.stringify({ user: user }),
                headers: { 'content-type': 'application/json' },
            });
            const { data } = await response.json();
            resolve({ data });
        } catch (error) {
            console.log(error, "error")
            reject(error);
        }
    })
}

export function checkIfUserEmailExists(email) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(Api.user.checkEmail, {
                method: 'POST',
                body: JSON.stringify({ email: email }),
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
export function fetchUser(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(Api.user.fetchUser + id, {
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
                `${Api.default}users/${userId}/addQuote/${quoteId}`,
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
            const response = await fetch(
                `${Api.default}users/${userId}/removeQuote/${quoteId}`,
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


export function addQuoteToMyQuotes(userId, quote, author) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(
                `${Api.default}users/${userId}/addToMyQuotes`,
                {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ quote, author }),

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

export function removeQuotesFromMyQuotes(userId, quoteId) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(
                `${Api.default}users/${userId}/removeFromMyQuotes/${quoteId}`,
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

export function updateQuoteFromMyQuotes(userId, quoteId, quote, author) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(
                `${Api.default}users/${userId}/updateMyQuotes`,
                {
                    method: 'POST',
                    body: JSON.stringify({ quoteId, quote, author }),
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