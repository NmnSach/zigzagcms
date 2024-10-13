import { defineType } from 'sanity'; // Importing types from Sanity

export default defineType({
  name: 'team',
  type: 'document',
  title: 'team',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'Image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'Role',
      type: 'text',
      title: 'Role',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Subtitle',
      description: 'For example - producer/sound specialist',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'Instagram',
      type: 'text',
      title: 'Instagram Account Link',
    },
    {
      name: 'Spotify',
      type: 'text',
      title: 'Spotify Account/Playlist Link',
    },
    {
      name: 'videos',
      type: 'array',
      title: 'Videos Produced',
      of: [{ type: 'reference', to: [{ type: 'video' }] }],
      description: 'This field shows videos associated with this producer.',
      options: {
        filter: '_type == "video" && producer._ref == $id',
        filterParams: { id: '_id' },
      },
    },
  ],
});
