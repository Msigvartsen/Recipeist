import FoodTableIcon from './FoodTableIcon'
import FoodTableInput from './FoodTableInput'
import FoodTablePreview from './FoodTablePreview'

export default {
  name: 'foodTableIngredient',
  title: 'Ingrediens fra Matvaretabellen',
  type: 'object',
  icon: FoodTableIcon,
  inputComponent: FoodTableInput,
  preview: {
    select: { name: "name", quantity: "quantity", unit: "unit", json: "json" },
    component: FoodTablePreview
  },
  fields: [
    {
      title: "Navn",
      name: "name",
      type: "string",
    },
    {
      title: "Mengde",
      name: "quantity",
      type: "number",
      validation: Rule => Rule.required().min(0)
    },
    {
      title: "Enhet",
      name: "unit",
      type: "string"
    },
    {
      title: "Data fra Matvaretabellen",
      name: "json",
      type: "string"
    }
  ]
}
