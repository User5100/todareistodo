import React from 'react'
import styled from 'styled-components'
import { array } from 'prop-types' 

const MainPresentation = (props) => (
  <Main>
    <Section>
      {props.models.map(model => {
        return (
          <Article
            key={model.brochure_id}>
            <H1>{model.body_type}</H1>
            <Paragraph>{model.brochure_name}</Paragraph>
            <Anchor>{model.link}</Anchor>
          </Article>
        )
      })}
    </Section>
  </Main>
)

const Main = styled.main`
	grid-area: main;
	@media(min-width: 400px) {
		overflow-y: scroll;
	}
`

const H1 = styled.h1`
	flex: 1;
	font-size: 3.3vw;	
`

const Paragraph = styled.p`
	flex: 1;
	font-size: 4vmin;
`

const Anchor = styled.a`
	flex: 1;
	display: inline-block;
	font-size: 3.1vmin;
	text-overflow: ellipsis;
	@media(min-width: 400px) {
		font-size: 2.1vmin;
	}
`

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin: 2%;
	flex: 1
	@media(min-width: 400px) {
		flex-direction: row;
	}
`

const Article = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	transition: background-color 0.1s;
	border: 1px solid #CACACA;
	box-shadow: 0px 2px 4px #D2D2D2;
	border-radius: 2px;
	width: 90%;
	margin: 2%;
	white-space: nowrap;
	overflow: hidden;
	&:hover {
		cursor: pointer;
	}
	@media(min-width: 400px) {
		flex: 0 0 40%;
		margin: 0%;
	}
`

MainPresentation.propTypes = {
  models: array
}

export default MainPresentation
