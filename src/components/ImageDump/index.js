import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { logos } from '../CategoryList/skills'
import { color } from '../../settings';

const svgFolder = '/svg-logos/';


const StyledCard = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: inline-flex;
    flex-direction: column;
    margin: 15px;
    color: ${color.medium};
    :hover {
        color: ${color.darkest};
        img {
            transform: rotate(2deg) scale(110%);
            filter: opacity(100%);
        }
    }
`

const Card = ({ fileLoc, label }) => {
    console.log({ label });
    return (
        <StyledCard>
            <div>
                <img src={`${svgFolder + fileLoc}.svg`} alt={label} />
            </div>
            <div>
                {label}
            </div>
        </StyledCard>
    )
}


const Styled = styled.div`
    img {
        max-height: 4rem;
        max-width: 7rem;
        vertical-align: middle;
        filter: opacity(65%);
        transition: all 0.25s;

    }
`

function ImageDump() {

    return (
        <Styled>
            {logos.map((el, i) => <Card fileLoc={el.filename} label={el.label} />)}
        </Styled>
    )
}

export default ImageDump
