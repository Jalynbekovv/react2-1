import React from 'react';
import {useSelector} from "react-redux";

const ListNumbers = () => {

    const numbers = useSelector(state => state.numbers)
    console.log(numbers)

    return (
        <ul>
            <li>{numbers}</li>
        </ul>
    )
};

export default ListNumbers;