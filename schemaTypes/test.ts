import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'test',
    title: 'Sanity test schema',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
    ]

})