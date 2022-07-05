import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const NumbersPage = () => {

    const [number, setNumber] = useState({
        count: ""
    })

    const dispatch = useDispatch();

    const onChangeInput = (e) => {
        setNumber({count: e.target.value})
    }

    const addNumber = () => {
        dispatch({
            type: "ADD_NUMBER",
            payload: number.count
        })
    }

    return (
        <div>
            <input type="number" onChange={onChangeInput} value={number.count}/>
            <button onClick={addNumber}>Add Number</button>
        </div>
    );
};

export default NumbersPage;