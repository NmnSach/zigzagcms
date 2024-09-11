import { defineType } from 'sanity'; // Importing types from Sanity

export default defineType({
  name: 'director',
  type: 'document',
  title: 'Director',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Biography',
    },
    {
      name: 'videos',
      type: 'array',
      title: 'Videos',
      of: [{ type: 'reference', to: [{ type: 'video' }] }]
    }
  ],
});

