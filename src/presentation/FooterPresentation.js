import React from 'react'
import styled from 'styled-components'

const FooterPresentation = (props) => (
  <Footer>
    <Button>Find a BMW Centre</Button>
    <Button>Request a brochure and price list</Button>
    <CallToAction>Request a test drive</CallToAction>
  </Footer>
)

const Footer = styled.footer`
	grid-area: footer;
	background-color: #FFF;
	border-top: 1px solid #CCCCCC;
	box-shadow: 0px 2px 10px #B8B8B8;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media(min-width: 400px) {
		flex-direction: row;
		justify-content: space-between;
		padding-left: 20px;
		padding-right: 20px;
	}
`

const Button = styled.button`
	color: #FFF;
	font-weight: 900;
	border-radius: 0px;
	height: 4em;
	width: 100%;
	background: linear-gradient(0deg, #535152 60%, #838383);
	&:hover {
		cursor: pointer;
	}
	@media(min-width: 400px) {
		width: minmax(max-content, 20%);
		margin: 4px;
	}
`

const CallToAction = styled.button`
	color: #FFF;
	font-weight: 900;
	border-radius: 0px;
	height: 4em;
	width: 100%;
	background: linear-gradient(0deg, #3169BE 60%, #2196F5);
	&:hover {
		cursor: pointer;
	}
	@media(min-width: 400px) {
		width: minmax(max-content, 20%);
		margin: 4px;
	}
`

export default FooterPresentation
