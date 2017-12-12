import React, { Component } from 'react'
import SidebarPresentation from '../presentation/SidebarPresentation'
import { array } from 'prop-types'

class SidebarContainer extends Component {
	constructor() {
		super()
	}

	handleClick = selectedValue => {
		this.props.updateStateWith('selectedCategory', selectedValue)
	}

	render() {
		return (
			<SidebarPresentation
				handleClick={this.handleClick}
				{...this.props}
			/>
		)
	}
}

export default SidebarContainer