const getReadList = () => {
    const readList = localStorage.getItem('read-list');
    if(readList){
        const storedList = (JSON.parse(readList))
        return storedList;
    }
    else {
        return [];
    }
}

const saveToLocalStorage = (id) => {
    // console.log(id);
    const dataList = getReadList()

    if (dataList.includes(id)){
        alert('You Already Added this Books!\nTry to Add Another');
    }
    else {
        dataList.push(id);
        const storedData = JSON.stringify(dataList);
        localStorage.setItem('read-list', storedData);
    }
}

export default saveToLocalStorage;