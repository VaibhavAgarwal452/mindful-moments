
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