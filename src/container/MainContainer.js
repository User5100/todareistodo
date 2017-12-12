import React, { Component } from 'react'
import MainPresentation from '../presentation/MainPresentation'

class MainContainer extends Component {
  constructor () {
    super()
  }

  isTypeObject = (data) => {
    return typeof data === 'object'
  }

  getModelsFrom(categoryData) {
    var models = []

    for(const prop in categoryData) {
      if(this.isTypeObject(categoryData[prop])) {
        models.push(categoryData[prop])
      }
    }

    return models
  }

  render () {
    var { selectedCategoryData } = this.props
    return (
      <MainPresentation
        models={this.getModelsFrom(selectedCategoryData)}
        {...this.props}
      />
    )
  }
}

export default MainContainer
