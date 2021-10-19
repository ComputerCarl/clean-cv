import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import floatingXo from './floating-xo'

const AnimatedCanvas = ({ background, children, color, altCanvasContent }) => {
    const aniCanvas = useRef(null);

    useEffect(() => {
        console.log(aniCanvas.current);
        floatingXo(aniCanvas.current, color);
    }, [])


    const styles = {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100vw',
        height: '100vh',
        background: background || '#04BBD3',
        zIndex: '-1'
    }


    return (<>
        <canvas style={styles} ref={aniCanvas} id={background ? "canvas-bg" : "canvas-fg"} >
            {altCanvasContent}
        </canvas>
        {children}
    </>)
}

export default AnimatedCanvas;