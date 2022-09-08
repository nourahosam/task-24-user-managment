import React from 'react';

export default function deleteItem(stateList, item){
    return stateList.filter((el)=>el.id != item);
}