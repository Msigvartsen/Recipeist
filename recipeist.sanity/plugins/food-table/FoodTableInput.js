import React, { Component } from 'react'
import { FormBuilderInput, PatchEvent, patches } from 'part:@sanity/form-builder'
import Fieldset from 'part:@sanity/components/fieldsets/default'
import Button from 'part:@sanity/components/buttons/default'
import { List, Item } from 'part:@sanity/components/lists/default'

const { set, setIfMissing } = patches

let foods = [];
const foodUrl = "https://mat.plagfinn.workers.dev/?foods"; // via en serverless function for å unngå CORS >_>
fetch(foodUrl)
  .then(x => x.json())
  .then(x => {
    console.debug(x)
    foods = x.foods;
  })
  .catch(error => {
    console.debug("fetch food error", error)
  })

export default class FoodTableInput extends Component {
  state = {
    query: "",
    filteredFoods: []
  }

  handleTextFieldChange = (fieldName, patchEvent) => {
    const { onChange, type } = this.props

    const textPatch = patchEvent.prefixAll(fieldName)

    onChange(textPatch.prepend(setIfMissing({ _type: type.name })))
  }

  render() {
    const { type } = this.props
    const value = this.props.value || {}
    const nameField = type.fields.find(field => field.name === 'name')
    const unitField = type.fields.find(field => field.name === 'unit')
    const jsonField = type.fields.find(field => field.name === 'json')
    const quantityField = type.fields.find(field => field.name === 'quantity')

    return (
      <Fieldset>
        <FormBuilderInput
          key="search"
          type={{ ...nameField.type, title: "Søk etter ingredienser i Matvaretabellen" }}
          value={this.state.query || ""}
          onChange={({ patches }) => { this.setState({ query: patches[0].value || "", filteredFoods: !patches[0].value ? [] : foods.filter(x => x.name.toLowerCase().startsWith(patches[0].value.toLowerCase())).slice(0, 5) }) }}
        />

        <List>
          {this.state.filteredFoods.map((food, i) =>
            <Item key={i}>
              <Button color="white" value={food.name} onClick={() => {
                this.handleTextFieldChange(nameField.name, PatchEvent.from(set(food.name)));
                this.handleTextFieldChange(unitField.name, PatchEvent.from(set(food.Portion.ref.trim())));
                this.handleTextFieldChange(jsonField.name, PatchEvent.from(set(JSON.stringify(food, null, 2))));
                this.setState({ query: "", filteredFoods: [] })
              }}>
                {food.name}
              </Button>
            </Item>
          )}
        </List>

        <FormBuilderInput
          key={nameField.name}
          type={nameField.type}
          value={value[nameField.name]}
          onChange={patchEvent => this.handleTextFieldChange(nameField.name, patchEvent)}
        />

        <FormBuilderInput
          key={quantityField.name}
          type={quantityField.type}
          value={value[quantityField.name]}
          onChange={patchEvent => this.handleTextFieldChange(quantityField.name, patchEvent)}
        />

        <FormBuilderInput
          key={unitField.name}
          type={unitField.type}
          value={value[unitField.name]}
          onChange={patchEvent => this.handleTextFieldChange(unitField.name, patchEvent)}
        />

        <pre>{value.json}</pre>
      </Fieldset>
    )
  }
}