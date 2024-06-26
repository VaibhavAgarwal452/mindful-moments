import Api from "@/common/Api";

export function fetchQuotes(userQuotesPrefrences) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(Api.quote.random, {
                method: 'POST',
                body: JSON.stringify({
                    quoteCategory: userQuotesPrefrences,
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
export function fetchQuotesByCategories(category) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(Api.quote.getQuotesByCategory, {
                method: 'POST',
                body: JSON.stringify({
                    quoteCategory: category,
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
            const response = await fetch(Api.quote.getQuotesById, {
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