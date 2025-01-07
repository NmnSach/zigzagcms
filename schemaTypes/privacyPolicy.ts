export default {
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'introParagraph',
      title: 'Introduction Paragraph',
      type: 'text',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Section',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'paragraph',
              title: 'Paragraph',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'paragraph',
            },
            prepare(selection: {title: any; subtitle: any}) {
              const {title, subtitle} = selection
              return {
                title,
                subtitle: subtitle ? `${subtitle.substring(0, 50)}...` : '',
              }
            },
          },
        },
      ],
    },
  ],
}
