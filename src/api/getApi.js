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
                    // console.log(item)
                    result = {...item};
                }
            })
        }
        return result;
     })

    //  .then((data) => {
    //     for (let key in data[0]) {
    //         const foundItem = data[0][key].find(item => item.id === id);
    //         if(foundItem) {
    //             return foundItem;
    //         }
    //     }
    //     // Если ничего не найдено, можно вернуть null или undefined
    //     return null;
    //  })

     .catch(error => { 
        throw error 
    });
}