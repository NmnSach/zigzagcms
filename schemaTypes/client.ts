import { defineType } from 'sanity'; // Importing the defineType function from Sanity

export default defineType({
  name: 'client',
  type: 'document',
  title: 'Client',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Client Name',
      validation: (Rule) => Rule.required().error('Client name is required'),
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Client Bio',
      description: 'Short bio or description of the client',
      validation: (Rule) => Rule.max(200).warning('Keep the bio concise (max 200 characters)'),
    },
    {
      name: 'videos',
      type: 'array',
      title: 'Related Videos',
      of: [{ type: 'reference', to: [{ type: 'video' }] }],
      description: 'Select the videos related to this client',
      validation: (Rule) => Rule.min(1).error('At least one video should be selected'),
    },
  ],
});
