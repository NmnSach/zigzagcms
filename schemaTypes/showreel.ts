import {defineType} from 'sanity'

export default defineType({
  name: 'showreel',
  type: 'document',
  title: 'Showreel',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoSize',
      type: 'string',
      title: 'Video Size',
    },
    {
      name: 'resolution',
      type: 'string',
      title: 'Resolution',
    },
    {
      name: 'director',
      type: 'reference',
      title: 'Director Name',
      to: [{type: 'director'}],
    },
    {
      name: 'producer',
      type: 'reference',
      title: 'Producer Name',
      to: [{type: 'producer'}],
      description: 'Add producer name and videos to show in the roster window.',
    },
    {
      name: 'dop',
      type: 'string',
      title: 'Director of Photography (DoP)',
    },
    {
      name: 'format',
      type: 'string',
      title: 'Format',
    },
  ],
})
