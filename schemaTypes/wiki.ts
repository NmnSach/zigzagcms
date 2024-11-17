import {defineType} from 'sanity'

export default {
  name: 'aboutWiki',
  title: 'About Wiki',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'history',
      title: 'History',
      type: 'object',
      fields: [
        {
          name: 'content',
          title: 'Content',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
    {
      name: 'work',
      title: 'Work',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'translationLink',
          title: 'Translation Link',
          type: 'url',
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image', options: {hotspot: true}}],
        },
      ],
    },
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule: {required: () => any}) => Rule.required(),
            },
            {
              name: 'role',
              title: 'Role',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'awards',
      title: 'Awards',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
    {
      name: 'seeAlso',
      title: 'See Also',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'externalLinks',
      title: 'External Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: {required: () => any}) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule: {
                uri: (arg0: {allowRelative: boolean; scheme: string[]}) => any
              }) =>
                Rule.uri({
                  allowRelative: false,
                  scheme: ['http', 'https'],
                }),
            },
          ],
        },
      ],
    },
  ],
}
