/* eslint no-eval: 0 */

import React, { useState } from 'react'
import './style.css'

function Calculadora() {

    const [number, setNumber] = useState(0)

    function inputNum(e) {
        if (number === 0 || number === '0') {
            setNumber(e.target.value)
        } else {
            setNumber(number + e.target.value)
        }
    }

    function operatorHendler(e) {
        if (e.target.value === '+/-') {
            setNumber(-number)
        } else if (e.target.value === '.') {
            setNumber(number + e.target.value)
        }
        else if (number > 0 || number < 0) {
            setNumber(number + e.target.value)
        }
    }

    function clearNumbers() {
        setNumber(0)
    }

    function calculate() {
        setNumber(eval(number))
    }


    return (
        <>
            <h1>Calculadora Simples</h1>
            <div className="wrapper">
                <span>{number}</span>
                <button className="others" onClick={clearNumbers}>AC</button>
                <button className="others" onClick={operatorHendler} value={'+/-'}>+/-</button>
                <button className="others" onClick={operatorHendler} value={'%'}>%</button>
                <button className="orange" onClick={operatorHendler} value={'/'}>/</button>
                <button onClick={inputNum} value={7}>7</button>
                <button onClick={inputNum} value={8}>8</button>
                <button onClick={inputNum} value={9}>9</button>
                <button className="orange" onClick={operatorHendler} value={'*'}>X</button>
                <button onClick={inputNum} value={4}>4</button>
                <button onClick={inputNum} value={5}>5</button>
                <button onClick={inputNum} value={6}>6</button>
                <button className="orange" onClick={operatorHendler} value={'-'}>-</button>
                <button onClick={inputNum} value={1}>1</button>
                <button onClick={inputNum} value={2}>2</button>
                <button onClick={inputNum} value={3}>3</button>
                <button className="orange" onClick={operatorHendler} value={'+'}>+</button>
                <button className="zero" onClick={inputNum} value={0}>0</button>
                <button onClick={operatorHendler} value={'.'}>,</button>
                <button className="others" onClick={calculate}>=</button>
            </div>
        </>
    )
}

export default Calculadora