import React from 'react'
import list from '../data'
import Shopcart from './shopcart'
import '../styles/amazon.css'
const Amazon = ({handleClick}) => {
    return (
        <section>
            {list.map((list) => (
                <Shopcart item={list} handleClick={handleClick} key={list.id} />
            ))}
        </section>
    );
};

export default Amazon;