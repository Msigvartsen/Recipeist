export default {
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'ingredients', title: 'Ingredients', type: 'array', of: [{ type: 'ingredients' }] },
        { name: 'mainbody', title: 'Main Body', type: 'array', of: [{ type: 'block' }] }
    ]
}