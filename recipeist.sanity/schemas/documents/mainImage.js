export default {
    name: 'mainImage',
    type: 'image',
    title: 'Image',
    options:{
        hotspot: true
    },
    fields: [
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
                isHighlighted: true
            }
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alt text',
            description: 'Alt text for SEO purposes',
            options: {
                isHighlighted: true
            }
        }
    ],
    preview:  {
        select: {
            imageUrl: 'asset.url',
            title: 'caption'
        }
    }
}