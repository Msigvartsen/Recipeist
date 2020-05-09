import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import siteSettings from "./documents/siteSettings"
import ingredient from "./documents/ingredient"
import recipe from "./documents/recipe"
import cuisine from "./documents/cuisine"

import mainImage from "./objects/mainImage"
import ingredients from "./objects/ingredients"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    ingredient,
    ingredients,
    recipe,
    mainImage,
    cuisine,
    siteSettings
  ])
})
