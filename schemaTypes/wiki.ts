import {defineType} from 'sanity'

export default defineType({
  name: 'aboutWiki',
  title: 'About Wiki',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Wiki Article Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Article Subtitle',
      type: 'string',
    },
    {
      name: 'subtitle_link_1',
      title: 'Subtitle Link 1',
      type: 'string',
    },
    {
      name: 'subtitle_link_2',
      title: 'Subtitle Link 2',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'history',
      title: 'History',
      type: 'object',
      fields: [
        {
          name: 'history',
          title: 'History Paragraph 1',
          type: 'text',
        },
        {
          name: 'history_extended',
          title: 'History Paragraph 2',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Wiki Intro Card Image',
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
          name: 'work_description_1',
          title: 'Work Description',
          type: 'text',
        },
        {
          name: 'work_description_2',
          title: 'Work Description',
          type: 'text',
        },
        {
          name: 'work_description_3',
          title: 'Work Description',
          type: 'text',
        },
        {
          name: 'translation_link_text',
          title: 'Translation Link Text',
          type: 'string',
        },
        {
          name: 'translation_link',
          title: 'Translation Link',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Work Section Card Image',
          type: 'image',
          options: {hotspot: true},
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
              title: 'Team Member Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'role',
              title: 'Team Member Role',
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
          title: 'Award Card Image',
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
    {
      name: 'seeAlso',
      title: 'See Also',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'relatedItems',
              title: 'Related Items',
              type: 'array',
              of: [{type: 'string'}],
              validation: (Rule) => Rule.min(1).required(),
            },
          ],
        },
      ],
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
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'list',
              title: 'List',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    },
  ],
})
