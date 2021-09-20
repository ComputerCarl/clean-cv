import React from 'react'
import { categories } from './skills'
import styled from 'styled-components'
import { MonoTyped } from '../Stylers/index'

const StyledWord = styled.div`
    div {
        margin: 10px;
        border: 1px solid whitesmoke;
        padding: 3px;
        :hover {
            background-color: lemonchiffon;
        }
    }
    display: flex;
    border-radius: 3px;
    flex-direction: column;
    cursor: pointer;
    text-align: right;
    @media(max-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

`


function CategoryList({ handleHover, handleLostHover }) {
    return (
        <MonoTyped>
            <StyledWord>
                {categories.map((el, i) =>
                    <div key={i}
                        onMouseEnter={() => handleHover(el)}
                        onMouseLeave={() => handleLostHover()}
                    >{el}</div>
                )}
            </StyledWord>
        </MonoTyped>
    )
}

export default CategoryList
