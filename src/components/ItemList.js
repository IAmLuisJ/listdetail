import React from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../actions';

const ItemList = (props) => {
    return props.items.map( (item) => {
            return (<div className='item' key={item.title}>{item.title}<div><button onClick={()=>{}}>Select</button></div></div>)}
        );
    }


const mapStateToProps = (state) => {
    return { items: state.items}
}

export default connect(mapStateToProps, {
    selectItem
})(ItemList);