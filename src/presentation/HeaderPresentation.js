import React from 'react'
import styled from 'styled-components'

const HeaderPresentation = (props) => (
  <Header>
    <nav>
      <Unordered>
        {/* props.modelCategories.map(modelCategory => (
				<Item
					key={modelCategory}>
					<a
						onClick={() => props.handleClickCategory(modelCategory)}>
						{modelCategory}
					</a>
				</Item>
			)) */}
        <Item>New Cars</Item>
        <Item>Ownership</Item>
        <Item>Finance</Item>
        <Item>Business</Item>
      </Unordered>
    </nav>
  </Header>
)

const Header = styled.header`
	grid-area: header;
	background: linear-gradient(#8F8F8F, #B3B3B3);
	color: #FFF;
`

const Unordered = styled.ul`
	list-style: none;
	@media(min-width: 400px) {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
`

const Item = styled.li`
	transition: background-color 0.1s;
	font-weight: 900;
	&:hover {
		cursor: pointer;
		background-color: grey;
	}
	&:first-child {
		color: #1454B5;
	}
`

export default HeaderPresentation
