import { useEffect, useState } from 'react'
import './Cell.css'

export default function Cell(props) {
    const [isOn, setIsOn] = useState(false);

    function reverseIsCellOn() {
        props.calculate(!isOn);
        setIsOn(!isOn);
    }

    let cellClassName = ''
    if (isOn) {
        cellClassName = 'box boxBlackBackground';
    } else {
        cellClassName = 'box';
    }

    return (
        <div className={cellClassName} onClick={()=>reverseIsCellOn()}></div>
    )
}