import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import HeaderContainer from './container/HeaderContainer'
import SidebarContainer from './container/SidebarContainer'
import MainContainer from './container/MainContainer'
import FooterContainer from './container/FooterContainer'
const BASE_URL = 'http://pdi.bmw.staging.oliver.solutions/data/series-data.json'

export default class App extends Component {
	constructor() {
		super()
	}

	state = {
		BMWData: [],
		selectedCategory: '1 Series'
	}

	get modelCategories() {
		var { BMWData } = this.state
		return Object.keys(BMWData)
	}

	get selectedCategoryData() {
		var { BMWData, selectedCategory } = this.state

		if(BMWData) {
			return BMWData[selectedCategory]
		} else {
			return []
		}
		
	}

	getDataFromUrl = (url) => {
		return axios
			.get(url)
			.then(response => response.data.data.series)
	}

	removeRedundantProperties = BMWData => {
		delete BMWData["brochure_image"]
    delete BMWData["brochure_id"]
    delete BMWData["brochure_name"]
    delete BMWData["background_image"]
    delete BMWData["link"]
    delete BMWData["link_text"]
		return BMWData
	}

	updateStateWith = (stateProperty, dataValue) => {
		this.setState({ [stateProperty]: dataValue })
	}

	componentDidMount() {
		this.getDataFromUrl(BASE_URL)
				.then(this.removeRedundantProperties)
				.then(dataResponse => {
					this.updateStateWith('BMWData', dataResponse)
				})
	}

	render() {
		return (
			<AppContainer>
				<HeaderContainer />
				<SidebarContainer
					updateStateWith={this.updateStateWith}
					modelCategories={this.modelCategories}
				/>
				<MainContainer 
					selectedCategoryData={this.selectedCategoryData}
				/>
				<FooterContainer />
			</AppContainer>
		)
	}
}

const AppContainer = styled.div`
	display: grid;
	height: 100vh;
	font-family: Helvetica, sans-serif;
	grid-template-areas:
		"header"
		"main"
		"aside"
		"footer";
	grid-template-rows: 1fr 4fr 1fr 1fr;
	grid-template-columns: 1fr;

	@media (min-width: 400px) {
		grid-template-areas:
			"header header"
			"aside main"
			"footer footer";
		grid-template-rows: minmax(min-content, 60px) 6fr 1fr;
		grid-template-columns: minmax(min-content, 200px) 6fr;
	} 
`