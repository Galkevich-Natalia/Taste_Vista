export async function getMenu() {
    return fetch("https://65bcf37fb51f9b29e932a09e.mockapi.io/API/Menu")
     .then((responce) => responce.json())
     .then((data) => {
        return data
        // console.log(data);
     })
     .catch(error => { 
        throw error 
    });
}

export async function getCardDatabById(id) {

    return fetch("https://65bcf37fb51f9b29e932a09e.mockapi.io/API/Menu")
     .then((responce) => responce.json())
     .then((data) => {

        let result ;
        
        for (let key in data[0]) {
            data[0][key].forEach(item => {
                if(item.id === id) {
                    result = {...item};
                }
            })
        }
        return result;
     })
     .catch(error => { 
        throw error 
    });
}