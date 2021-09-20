import React from 'react'
import { categories } from './skills'
import styled from 'styled-components'
import { MonoTyped } from '../Stylers/index'

const StyledWord = styled.div`
    div {
        margin: 10px;
    }
    display: flex;
    flex-direction: column;
    text-align: right;
    @media(max-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

`


function CategoryList() {
    return (
        <MonoTyped>
            <StyledWord>
                {categories.map((el, i) =>
                    <div key={i}>{el}</div>
                )}
            </StyledWord>
        </MonoTyped>
    )
}

export default CategoryList
