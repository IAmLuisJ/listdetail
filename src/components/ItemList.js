import React from 'react';
import { connect } from 'react-redux';

const ItemList = (props) => {
    return <div className='ItemList'>Item</div>
}

const mapStateToProps = (state) => {
    console.log(state)
    return state;
}

export default connect(mapStateToProps)(ItemList);