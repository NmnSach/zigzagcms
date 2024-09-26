import { defineType } from 'sanity'; // Importing the defineType function from Sanity

export default defineType({
  name: 'industry',
  type: 'document',
  title: 'Industry',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Industry Name',
      validation: (Rule) => Rule.required().error('Industry name is required'),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Industry Description',
      description: 'Short description of the industry',
      validation: (Rule) => Rule.max(200).warning('Keep the description concise (max 200 characters)'),
    },
    {
      name: 'videos',
      type: 'array',
      title: 'Related Videos',
      of: [{ type: 'reference', to: [{ type: 'video' }] }],
      description: 'Select the videos related to this industry',
      validation: (Rule) => Rule.min(1).error('At least one video should be selected'),
    },
  ],
});
