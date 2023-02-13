import React from 'react'
import { categories } from './skills'
import styled from 'styled-components'
import { MonoTyped } from '../Stylers/index'

const StyledWord = styled.div`
    button {
        margin: 10px;
        border: 1px solid whitesmoke;
        padding: 3px;
        &.hovered, :hover {
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


function CategoryList({ handleMouseEnter, handleMouseLeave, hoveredCategories }) {
    return (
        <MonoTyped>
            <StyledWord>
                {categories.map((el, i) =>
                    <button key={i}
                        className={(hoveredCategories.indexOf(el.toLowerCase()) > -1) ? 'hovered' : ''}
                        onMouseEnter={() => handleMouseEnter(el)}
                        onMouseLeave={() => handleMouseLeave()}
                    >{el}</button>
                )}
            </StyledWord>
        </MonoTyped>
    )
}

export default CategoryList
