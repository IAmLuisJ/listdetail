
export const listReducer = () => {
    return [
        { title: 'example item', detail: 'detail example'},
        { title: 'another example', detail: 'thshksd'},
        { title: 'tklhjsdklf', detail: 'lkjsdf'}
    ]
}

export const selectedItemReducer = (selectedSong=null, action) => {
    if (action === 'SELECT_ITEM') {
        return action.payload;
    }
}

