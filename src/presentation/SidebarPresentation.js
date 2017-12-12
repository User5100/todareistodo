import React from 'react'
import styled from 'styled-components'
import { array } from 'prop-types' 

const SidebarPresentation = (props) => (
  <Aside>
    <h2>Categories</h2>
    <Nav>
      <Unordered>
        {props.modelCategories.map(categoryItem => (
          <Item
            key={categoryItem}
            onClick={() => props.handleClick(categoryItem)}>
            {categoryItem}
          </Item>
				))}
      </Unordered>
    </Nav>
  </Aside>
)

const Aside = styled.aside`
	grid-area: aside;
	background-color: #FFF;
	border-right: 1px solid #CBCBCB;
	box-shadow: 2px 0px 4px #D9D9D9;
	color: #666464;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	user-select: none;
	@media (min-width: 400px) {
		padding: 4%;
		justify-content: start;
	} 
`

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Unordered = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	padding-left: 0;
`

const Item = styled.li`
	font-weight: 600;
	flex: 1;
	transition: color 0.12s;
	&:hover {
		cursor: pointer;
		color: #206EC7;
	}
`

SidebarPresentation.propTypes = {
  modelCategories: array
}

export default SidebarPresentation
