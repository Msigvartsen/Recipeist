import React from 'react'
import DefaultPreview from 'part:@sanity/components/previews/default'

class FoodTablePreview extends React.Component {
  render() {
    const { name, quantity, unit } = this.props.value || {}
    const title = `${name} (${quantity}${unit ? " " + unit.trim() : ""})`;
    return <DefaultPreview {...this.props} title={title} media={this.props.icon} />
  }
}

export default FoodTablePreview