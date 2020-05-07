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
                    { title: 'Nuts', value: 'nuts' },
                    { title: 'Meat', value: 'meat' },
                    { title: 'Fish', value: 'fish' },
                    { title: 'seasoning', value: 'seasoning' }
                ]
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: "name"
            }
        },
        {
            name: 'foodData',
            type: 'text',
            title: 'Data fra Matvaretabellen',
            readOnly: true
        },],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
}
