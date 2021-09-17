
//Action Creator
export const selectItem = (song) => {
    //return an action
    return {
        type: 'SELECT_ITEM',
        payload: song
    }
}

