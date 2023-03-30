// use local storage to manage cart data
const addToDb = name => {
    let visitList = getVisitList();
    // add quantity
    const quantity = visitList[name];
    if (!quantity) {
        visitList[name] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        visitList[name] = newQuantity;
    }
    localStorage.setItem('Want-visit', JSON.stringify(visitList));
}

const removeFromDb = name => {
    const visitList = getVisitList();
    if (name in visitList) {
        delete visitList[name];
        localStorage.setItem('Want-visit', JSON.stringify(visitList));
    }
}

const getVisitList = () => {
    let visitList = {};

    //get the visitList from local storage
    const storedCart = localStorage.getItem('Want-visit');
    if (storedCart) {
        visitList = JSON.parse(storedCart);
    }
    return visitList;
}

const deleteVisitList = () => {
    localStorage.removeItem('Want-visit');
}

export {
    addToDb,
    removeFromDb,
    getVisitList,
    deleteVisitList
}
