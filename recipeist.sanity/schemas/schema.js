import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import siteSettings from "./documents/siteSettings"
import ingredient from "./documents/ingredient"
import ingredientGroup from "./documents/ingredientGroup"
import recipe from "./documents/recipe"
import cuisine from "./documents/cuisine"
const documents = [recipe, cuisine, ingredient, ingredientGroup, siteSettings]

import mainImage from "./objects/mainImage"
import ingredientWithQuantity from "./objects/ingredientWithQuantity"
const objects = [mainImage, ingredientWithQuantity]

export default createSchema({
  name: "default",
  types: schemaTypes.concat(documents, objects)
})
