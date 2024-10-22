import { defineType } from 'sanity';

export default defineType({
  name: 'video',
  type: 'document',
  title: 'Video',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
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
      name: 'director',
      type: 'reference',
      title: 'Director Name',
      to: [{ type: 'director' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'industry',
      type: 'reference',
      title: 'Industry',
      to: [{ type: 'industry' }], 
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'client',
      type: 'reference',
      title: 'Client',
      to: [{ type: 'client' }], 
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isShowreel',
      type: 'boolean',
      title: 'Make this video Showreel for Home Launcher Section',
      options: {
        layout: 'checkbox',
      },
    },
  ],
});
