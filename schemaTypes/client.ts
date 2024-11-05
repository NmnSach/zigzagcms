import { defineType } from 'sanity';

export default defineType({
  name: 'client',
  type: 'document',
  title: 'Client',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Client Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      type: 'icon',
      title: 'client icon',
      description: 'Client Icon for zigzagtv window filters',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videos',
      type: 'array',
      title: 'Videos by Client',
      of: [{ type: 'reference', to: [{ type: 'video' }] }],
      readOnly: true,
      description: 'Videos associated with this client.',
      options: {
        filter: '_type == "video" && client._ref == $id',
        filterParams: { id: '_id' },
      },
    },
  ],
});
