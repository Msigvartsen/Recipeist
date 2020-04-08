export default {
    name: 'ingredient',
    title: 'Ingredient',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'ingredienttype',
            title: 'Ingredienttype',
            type: 'string',
            options: {
                list: [
                    { title: 'Vegetable', value: 'vegetable' },
                    { title: 'Fruit', value: 'fruit' },
                    { title: 'Nuts', value: 'nuts' }
                ]
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        }],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
}
