import React from 'react';

export const deleteItem = (stateList, item) => {
    return stateList.filter((el)=>el.id != item);
}

export const  updateItem = (stateList, item) =>{
    const index = stateList.find((el)=> el.id === item.id);
    stateList[stateList.indexOf(index)] = item;
    console.log()
    console.log("stateList[index]",stateList);
    return stateList;
}