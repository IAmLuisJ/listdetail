import { combineReducers } from "redux";

const listReducer = () => {
    return [
        { title: 'example item', detail: 'detail example'},
        { title: 'another example', detail: 'thshksd'},
        { title: 'tklhjsdklf', detail: 'lkjsdf'}
    ]
}

const selectedItemReducer = (selectedItem = null, action) => {
    if (action.type === 'SELECT_ITEM') {
        return action.payload;
    }

    return selectedItem;
}

export default combineReducers({
    items: listReducer,
    selectedItem: selectedItemReducer
})