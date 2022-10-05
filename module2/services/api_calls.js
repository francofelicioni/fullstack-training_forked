//Post form
export const postForm = async ( url, name, email) => {
    await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            email: email,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json());
}

export default postForm;
//Get Currency 


//Get images

