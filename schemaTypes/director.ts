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
      name: 'Image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Biography',
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Subtitle',
      description: 'For example - director/deep closeted musician'
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
      title: 'Videos Directed',
      of: [{ type: 'reference', to: [{ type: 'video' }] }],
      readOnly: true,
      description: 'This field shows videos associated with this director.',
      options: {
        filter: '_type == "video" && director._ref == $id',
        filterParams: { id: '_id' },
      },
    },
  ],
});
