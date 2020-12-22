import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);