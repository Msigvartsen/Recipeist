export default {
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'image', type: 'mainImage', title: 'Image' },
        { name: 'mainintro', type: 'text', title: 'Main Intro' },
        { name: 'ingredients', type: 'array', title: 'Ingredients', of: [{ type: 'ingredients' }] },
        { name: 'mainbody', type: 'array', title: 'Main Body', of: [{ type: 'block' }] }
    ]
}