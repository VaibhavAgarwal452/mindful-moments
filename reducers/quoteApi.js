export function fetchQuotes() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://15.206.72.239:8000/api/v1/quotes/random', {
                method: 'POST',
                body: JSON.stringify({
                    page: 1,
                    limit: 25,
                }),
                headers: { 'content-type': 'application/json' },
            });
            const data = await response.json();
            resolve(data.quotes);
        } catch (error) {
            console.log(error, "error")
            reject(error);
        }
    });
}

export function fetchQuotesByIds(ids) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://15.206.72.239:8000/api/v1/quotes/quote/getQuotesById', {
                method: 'POST',
                body: JSON.stringify({ ids: ids }),
                headers: { 'content-type': 'application/json' },
            });
            const data = await response.json();
            resolve(data);
        } catch (error) {
            console.log(error, "error")
            reject(error);
        }
    });
}