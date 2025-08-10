import { toast } from "react-toastify";

const getDataFromLS = () => {
    const getData = localStorage.getItem('wish-list');
    if(getData){
        const returnedData = JSON.parse(getData);
        return returnedData;
    }
    else return [];
}

const saveWishlistToLocalStorage = (id) => {
    const storedData = getDataFromLS();

    if (storedData.includes(id)){
        alert("Already Existing this Book in WishList!");
    }
    else {
        storedData.push(id);
        const sendDataToLS = JSON.stringify(storedData);
        localStorage.setItem('wish-list', sendDataToLS);
        toast('Added this book in Wish List!');
    }
}

export default saveWishlistToLocalStorage;