export default {
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        {
            name: 'foodTableIngredients',
            type: 'array',
            title: 'Ingredienser fra Matvaretabellen',
            of: [{
                type: 'foodTableIngredient'
            }],
        },
        { name: 'image', type: 'mainImage', title: 'Image' },
        { name: 'mainintro', type: 'text', title: 'Main Intro' },
        { name: 'ingredients', type: 'array', title: 'Ingredients', of: [{ type: 'ingredients' }] },
        { name: 'mainbody', type: 'array', title: 'Main Body', of: [{ type: 'block' }] },
        { name: 'cuisinetype', type: 'array', title: 'Cuisinetype', of: [{ type: 'reference', to: [{ type: 'cuisine' }] }] },
        { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }
    ]
}