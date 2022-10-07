import PRICES from "../utils/constants.js";

//Post form
export const postForm = async ( url, name, email) => {
    
    await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            name: name ? name : null, //not ideal send name key w. newsletter
            email: email,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => console.log('modal post', data))
}


//Get Currency 
export const getCurrencies = async (url, currency) => {
    const response = await fetch(url)
    const data  = await response.json();
        
            if(currency === 'eur'){
                const eur_values = Object.values(PRICES).map(price => price * data.usd.eur);
                return eur_values
            } else if (currency === 'gbp'){
                const gbp_values = Object.values(PRICES).map(price => price * data.usd.gbp);
                return gbp_values
            } else return Object.values(PRICES);
        
}


//Get images

