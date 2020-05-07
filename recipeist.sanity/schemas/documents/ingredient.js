import React from 'react'
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
            name: 'imageUrl',
            type: 'string',
            title: 'Bilde-URL'
        },
        {
            name: 'imageAltText',
            type: 'string',
            title: 'Bildebeskrivelse'
        },
        {
            name: 'translation',
            type: 'string',
            title: 'Oversettelse'
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
            imageUrl: 'imageUrl',
        },
        prepare(selection) {
            const { title, imageUrl } = selection
            let result = { title }
            if (imageUrl) result.media = <img src={imageUrl} />
            return result
        },
    }
}
