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
      type: 'string',
      title: 'Industry Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'client',
      type: 'string',
      title: 'Client Name',
      validation: (Rule) => Rule.required(),
    }
  ],
});
