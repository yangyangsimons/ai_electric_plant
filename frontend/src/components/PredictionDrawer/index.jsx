import React from 'react'
import { useSelector } from 'react-redux';
export default function Index() {
    const imgSrc = useSelector(state => state.screenshot.imageSrc);
    console.log(imgSrc);
    return (
        <div>
            {imgSrc && <img src={imgSrc} alt="Screenshot" style={{ width: '100%' }} />}
            <p>Some contents...</p>
            <p>Some contents...</p>
        </div>


    )
}
