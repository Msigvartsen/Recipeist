export default {
    name: 'ingredients',
    title: 'Ingredients',
    type: 'object',
    fields: [
        { name: 'ingredient', type: 'reference', title: 'Ingredient', to: [{ type: 'ingredient' }] },
        { name: 'quantity', type: 'number', title: 'Quantity' },
        {
            name: 'unit', type: 'string', title: 'Unit', options: {
                list: [
                    { title: 'g', name: 'g' },
                    { title: 'dl', name: 'dl' }
                ]
            }
        }
    ],
    preview: {
        select: {
            title: 'ingredient.name',
            quantity: 'quantity',
            unit: 'unit',
            image: 'ingredient.image'
        },
        prepare(selection) {
            const { title, quantity, unit, image } = selection;
            return {
                title: title,
                subtitle: `${quantity} ${unit}`,
                media: image
            }
        }
    }
}