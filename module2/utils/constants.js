//PRICES
const PRICES = {
    basic: 0, 
    pro: 25, 
    prem: 60,
};
export default PRICES;

//REGEX
export const REGEX = {
    name: /^[a-zA-Z]{2,100}$/,
    email: /[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/,
}

//URLS
export const URL_POST_FORM = "https://jsonplaceholder.typicode.com/posts";
export const URL_GET_CURRENCIES = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";