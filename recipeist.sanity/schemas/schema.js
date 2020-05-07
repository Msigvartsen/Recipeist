import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import ingredient from './documents/ingredient';
import ingredients from './objects/ingredients';
import recipe from './documents/recipe';
import mainImage from './documents/mainImage';
import cuisine from './documents/cuisine';
import siteSettings from './documents/siteSettings';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    ingredient,
    ingredients,
    recipe,
    mainImage,
    cuisine,
    siteSettings
  ])
})
