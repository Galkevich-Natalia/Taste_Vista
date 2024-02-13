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