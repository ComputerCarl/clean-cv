import React from "react";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";

const TypedStrings = ({ typeOptions, StylerComponent }) => {
    const el = useRef(null);
    const [isShowCursor, setShowCursor] = useState(true);

    useEffect(() => {

        const typed = new Typed(el.current,
            {
                ...TypedStrings.defaultProps.typeOptions,
                ...typeOptions,
                showCursor: isShowCursor,
                onComplete: () => setShowCursor(false)
            }
        );

        // cleanup
        return () => {
            typed.destroy();
        };
    }, []);


    if (StylerComponent) return (
        <StylerComponent killCursor={isShowCursor}>
            <span ref={el} />
        </StylerComponent>
    );

    return (
        <span ref={el} />
    );
}

export default TypedStrings


TypedStrings.defaultProps = {
    typeOptions: {
        strings: [],
        startDelay: 500,
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 1200,
        loop: false,
        cursorChar: "|",
    }
}