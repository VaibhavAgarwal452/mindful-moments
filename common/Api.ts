const API_PATH = "http://15.206.72.239:8000/"
const API_VERSION = "api/v1/"

const Api = {
    default: `${API_PATH}${API_VERSION}`,
    user: {
        register: `${API_PATH}${API_VERSION}users/register`,
        login: `${API_PATH}${API_VERSION}users/login`,
        updateUser: `${API_PATH}${API_VERSION}users/updateUser/`,
        checkEmail: `${API_PATH}${API_VERSION}users/checkEmail`,
        fetchUser: `${API_PATH}${API_VERSION}users/user/`
    },
    quote: {
        random: `${API_PATH}${API_VERSION}quotes/random`,
        getQuotesByCategory: `${API_PATH}${API_VERSION}quotes/getQuotesByCategory`,
        getQuotesById: `${API_PATH}${API_VERSION}quotes/quote/getQuotesById`
    },
    collection : {
        getCollection: `${API_PATH}${API_VERSION}collections/getCollection/`,
        create: `${API_PATH}${API_VERSION}collections/create`,
        updateName: `${API_PATH}${API_VERSION}collections/updateName/`,
        removeQuotesFromCollection: `${API_PATH}${API_VERSION}collections/removeQuotesFromCollection`,
        addQuoteToCollection: `${API_PATH}${API_VERSION}collections/addQuoteToCollection`
    }
}
export default Api 