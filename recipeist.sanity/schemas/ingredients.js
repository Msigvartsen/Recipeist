export default {
    name: 'ingredients',
    title: 'Ingredients',
    type: 'object',
    fields: [
        { name: 'ingredient', title: 'Ingredient', type: 'reference', to: [{ type: 'ingredient' }] },
        { name: 'quantity', title: 'Quantity', type: 'number' }
    ]
    ,
    preview: {
        select: {
            title: 'ingredient.name',
            subtitle: 'quantity',
            media: 'ingredient.image'
        }
    }
}