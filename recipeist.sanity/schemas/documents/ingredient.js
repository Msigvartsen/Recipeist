export default {
    name: 'ingredient',
    title: 'Ingredient',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'ingredienttype',
            type: 'string',
            title: 'Ingredienttype',
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
            type: 'image',
            title: 'Image'
        }]
    ,
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
}
