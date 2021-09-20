import React from 'react'
import { categories } from './skills'
import styled from 'styled-components'
import { MonoTyped } from '../Stylers/index'

const Styled = styled.ul`
    text-align: right;
    list-style: none;
    line-height: 2rem;
`


function CategoryList() {
    return (
        <Styled>
            <MonoTyped>
                {categories.map((el, i) =>
                    <li key={i}>{el}</li>
                )}
            </MonoTyped>
        </Styled>
    )
}

export default CategoryList
