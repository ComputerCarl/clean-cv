import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import floatingXo from './floating-xo'

const AnimatedCanvas = ({ background, children, color }) => {
    const aniCanvas = useRef(null);

    useEffect(() => {
        console.log(aniCanvas.current);
        floatingXo(aniCanvas.current, color);
    }, [])


    const styles = {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        background: background || '#04BBD3',
        zIndex: '100'
    }


    return (<canvas style={styles} ref={aniCanvas} id={background ? "canvas-bg" : "canvas-fg"} >
        {children}
    </ canvas>)
}

export default AnimatedCanvas;